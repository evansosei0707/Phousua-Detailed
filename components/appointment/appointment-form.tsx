"use client"

import { useState } from "react"
import { z } from "zod"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { toast } from "sonner"

// Define appointment types
type AppointmentType = "custom-made" | "measurement" | "styling"

// Define the appointment form schema with Zod
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
interface FormState {
  status: "idle" | "pending" | "success" | "error"
  errors?: z.ZodFormattedError<z.infer<typeof appointmentSchema>>
  data?: {
    name: string
    email: string
    date: string
    time: string
    type: AppointmentType
  }
}

// Define appointment data type
// type AppointmentData = z.infer<typeof appointmentSchema>;

// Define the appointment form action
async function createAppointment(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  // Simulate a delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  try {
    // Parse and validate the form data
    const rawData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      date: new Date(formData.get("date") as string),
      time: formData.get("time") as string,
      type: formData.get("type") as AppointmentType,
      message: formData.get("message") as string,
    }

    // Validate the form data
    const data = appointmentSchema.parse(rawData)

    // Here you would typically save the appointment to your database
    // console.log("Appointment created:", data)

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
        _errors: ["An unexpected error occurred. Please try again."],
      },
    }
  }
}

export default function AppointmentForm() {
  // Form state management
  const [formState, setFormState] = useState<FormState>({ status: "idle" })
  const [selectedDate, setSelectedDate] = useState<Date | undefined>()

  // Generate time slots from 12 PM to 6 PM (as requested)
  const timeSlots = Array.from({ length: 13 }, (_, i) => {
    const hour = Math.floor(i / 2) + 12 // Start at 12 PM
    const minute = i % 2 === 0 ? "00" : "30"
    const ampm = hour >= 12 ? "PM" : "AM"
    const hour12 = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour
    return `${hour12}:${minute} ${ampm}`
  })

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Set pending state
    setFormState({ status: "pending" })

    // Create form data
    const formData = new FormData(e.currentTarget)

    // Add selected date if available
    if (selectedDate) {
      formData.set("date", selectedDate.toISOString())
    }

    // Process form
    const result = await createAppointment(formState, formData)
    setFormState(result)

    // Show toast on success
    if (result.status === "success" && result.data) {
      // Fixed: Use toast function correctly
      toast.success("Appointment Booked!", {
        description: `Your ${result.data.type} appointment is scheduled for ${result.data.date} at ${result.data.time}.`,
      })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="Enter your full name"
            required
          />
          {formState.status === "error" && formState.errors?.name && (
            <p className="text-sm text-red-500">
              {formState.errors.name._errors[0]}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            required
          />
          {formState.status === "error" && formState.errors?.email && (
            <p className="text-sm text-red-500">
              {formState.errors.email._errors[0]}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            required
          />
          {formState.status === "error" && formState.errors?.phone && (
            <p className="text-sm text-red-500">
              {formState.errors.phone._errors[0]}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="type">Appointment Type</Label>
          <Select name="type" required>
            <SelectTrigger id="type">
              <SelectValue placeholder="Select appointment type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="custom-made">Custom-made</SelectItem>
              <SelectItem value="measurement">Measurement</SelectItem>
              <SelectItem value="styling">Styling Session</SelectItem>
            </SelectContent>
          </Select>
          {formState.status === "error" && formState.errors?.type && (
            <p className="text-sm text-red-500">
              {formState.errors.type._errors[0]}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="date">Appointment Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal"
                id="date-trigger"
                type="button"
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {selectedDate ? (
                  format(selectedDate, "PPP")
                ) : (
                  <span>Select a date</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                disabled={(date) => {
                  // Disable dates in the past and weekends
                  const now = new Date()
                  now.setHours(0, 0, 0, 0)
                  return (
                    date < now || date.getDay() === 0 || date.getDay() === 6
                  )
                }}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          {/* Hidden input to submit the date value */}
          <input
            type="hidden"
            name="date"
            value={selectedDate?.toISOString() || ""}
          />
          {formState.status === "error" && formState.errors?.date && (
            <p className="text-sm text-red-500">
              {formState.errors.date._errors[0]}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="time">Appointment Time</Label>
          <Select name="time" required>
            <SelectTrigger id="time">
              <SelectValue placeholder="Select a time" />
            </SelectTrigger>
            <SelectContent>
              {timeSlots.map((time) => (
                <SelectItem key={time} value={time}>
                  {time}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {formState.status === "error" && formState.errors?.time && (
            <p className="text-sm text-red-500">
              {formState.errors.time._errors[0]}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message (Optional)</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us about your specific requirements or any questions you have"
          className="min-h-[120px]"
        />
      </div>

      <div className="flex justify-end">
        <Button
          type="submit"
          className="w-full md:w-auto"
          disabled={formState.status === "pending"}
        >
          {formState.status === "pending" ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Processing...
            </>
          ) : (
            "Book Appointment"
          )}
        </Button>
      </div>

      {formState.status === "success" && formState.data && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-md text-green-800">
          <h3 className="font-semibold text-lg mb-2">
            Appointment Booked Successfully!
          </h3>
          <p>
            Thank you for booking an appointment with us. We&apos;ve sent a
            confirmation email to {formState.data.email}.
          </p>
          <p className="mt-2">
            Your {formState.data.type} appointment is scheduled for{" "}
            {formState.data.date} at {formState.data.time}.
          </p>
        </div>
      )}
    </form>
  )
}
