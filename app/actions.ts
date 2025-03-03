/* eslint-disable @typescript-eslint/no-explicit-any */
// This goes in a server-side file, e.g., actions.ts
"use server"

import { z } from "zod"
import { format } from "date-fns"
import {
  sendAdminEmailAlert,
  sendAppointmentEmail,
} from "@/components/appointment/email"

// Define the appointment form schema
const appointmentSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  date: z.date({ required_error: "Please select a date" }),
  time: z.string({ required_error: "Please select a time" }),
  type: z.enum(["custom-made", "measurement", "styling"], {
    required_error: "Please select an appointment type",
  }),
  message: z.string().optional(),
})

// Define form state type
export interface FormState {
  status: "idle" | "pending" | "success" | "error"
  errors?: z.ZodFormattedError<z.infer<typeof appointmentSchema>>
  data?: {
    name: string
    email: string
    date: string
    time: string
    type: string
  }
}

// Resend email function

export async function sendEmail(
  name: string,
  service: string,
  time: string,
  phone: string,
  date: string,
  to: string
) {
  try {
    await sendAppointmentEmail(name, service, date, to)

    await sendAdminEmailAlert(name, service, date, time, phone, to)

    console.log(
      `✅ Email sent to ${to} and Admin Alert sent to Phosua Detailed`
    )
  } catch (error) {
    console.error("Email sending error:", error)
    throw new Error("Failed to send email")
  }
}

export async function createAppointment(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  try {
    // Parse and validate the form data
    const rawData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      date: new Date(formData.get("date") as string),
      time: formData.get("time") as string,
      type: formData.get("type") as string,
      message: (formData.get("message") as string) || "",
    }

    // Validate the form data
    const data = appointmentSchema.parse(rawData)

    // Prepare data for Shopify
    const appointmentData = {
      customer: {
        email: data.email,
        first_name: data.name.split(" ")[0],
        last_name: data.name.split(" ").slice(1).join(" ") || "",
        phone: data.phone,
        tags: "appointment",
        note: `Appointment Request:
          Type: ${data.type}
          Date: ${format(data.date, "PPP")}
          Time: ${data.time}
          Message: ${data.message}`,
      },
    }

    // Send data to Shopify Admin API
    const shopifyResponse = await createShopifyAppointment(appointmentData)
    const storeData = await shopifyResponse.json()
    console.log("Response:", storeData)
    // console.log("email response:", storeData.customer.email)

    if (!shopifyResponse.ok) {
      // Check if this is a duplicate customer error
      if (
        storeData.errors &&
        (storeData.errors.email || storeData.errors.phone)
      ) {
        // Format the errors to match Zod error format
        const formattedErrors: any = {}

        if (storeData.errors.email) {
          formattedErrors.email = {
            _errors: ["This email is already in our system."],
          }
        }

        if (storeData.errors.phone) {
          formattedErrors.phone = {
            _errors: ["This phone number is already in our system."],
          }
        }

        return {
          status: "error",
          errors: formattedErrors,
        }
      }
      throw new Error("Failed to create appointment in Shopify")
    }

    const formattedDate = format(data.date, "PPP")

    await sendEmail(
      data.name,
      data.type,
      data.time,
      data.phone,
      formattedDate,
      data.email
    )

    // Return success
    return {
      status: "success",
      data: {
        name: data.name,
        email: data.email,
        date: format(data.date, "PPP"),
        time: data.time,
        type: data.type,
      },
    }
  } catch (error) {
    console.error("Appointment creation error:", error)

    // Handle validation errors
    if (error instanceof z.ZodError) {
      return {
        status: "error",
        errors: error.format(),
      }
    }

    // Handle other errors
    return {
      status: "error",
      errors: {
        _errors: ["Failed to create appointment. Please try again."],
      },
    }
  }
}

// Function to send data to Shopify
async function createShopifyAppointment(appointmentData: any) {
  const SHOP = process.env.SHOPIFY_STORE_DOMAIN
  const ACCESS_TOKEN = process.env.SHOPIFY_ADMIN_ACCESS_TOKEN

  return fetch(`https://${SHOP}/admin/api/2025-01/customers.json`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Access-Token": ACCESS_TOKEN as string,
    },
    body: JSON.stringify(appointmentData),
  })
}
