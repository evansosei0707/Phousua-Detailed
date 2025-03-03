import React from "react"
import { Resend } from "resend"
import { render } from "@react-email/render"
import { AppointmentConfirmation } from "@/components/appointment/appointmentConfirmation"
import { AdminAlertEmail } from "./adminEmailAlert"

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendAppointmentEmail = async (
  name: string,
  service: string,
  date: string,
  to: string
) => {
  console.log(name)
  try {
    // Convert your custom component into raw HTML
    const html = await render(
      React.createElement(AppointmentConfirmation, { name, service, date })
    )

    const data = await resend.emails.send({
      from: process.env.EMAIL_FROM!,
      to,
      subject: "Appointment Confirmation",
      html,
    })

    return data
  } catch (error) {
    console.error("Failed to send email:", error)
    throw error
  }
}

export const sendAdminEmailAlert = async (
  name: string,
  service: string,
  date: string,
  time: string,
  phone: string,
  to: string
) => {
  console.log(name)
  try {
    // Convert your custom component into raw HTML
    const adminHtml = await render(
      React.createElement(AdminAlertEmail, {
        name,
        service,
        date,
        time,
        phone,
        to,
      })
    )

    const data = await resend.emails.send({
      from: process.env.EMAIL_FROM!,
      to: process.env.TO_ADMIN!,
      subject: `New Appointment Alert: ${name}`,
      html: adminHtml,
    })

    return data
  } catch (error) {
    console.error("Failed to send email:", error)
    throw error
  }
}
