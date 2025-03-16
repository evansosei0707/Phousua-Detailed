"use client"

import { useState } from "react"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"

import { createAppointment, FormState } from "@/app/actions"

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

export default function NewAppointmentForm() {
  // Form state management
  const [formState, setFormState] = useState<FormState>({ status: "idle" })
  const [selectedDate, setSelectedDate] = useState<Date | undefined>()

  // Generate time slots from 12 PM to 6 PM with 1-hour intervals
  const timeSlots = Array.from({ length: 7 }, (_, i) => {
    const hour = i + 12 // Start at 12 PM
    const minute = "00"
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

    try {
      // Call the server action
      const result = await createAppointment(formState, formData)
      setFormState(result)

      console.log("booking results:", result)

      // Show toast on success
      if (result.status === "success" && result.data) {
        toast.success("Appointment Booked!", {
          description: `Your ${result.data.type} appointment is scheduled for ${result.data.date} at ${result.data.time}.`,
        })
      } else {
        toast.error("Booking Failed", {
          description:
            "There was a problem booking your appointment. Please try again.",
        })
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setFormState({
        status: "error",
        errors: {
          _errors: ["An unexpected error occurred. Please try again."],
        },
      })

      // if (formState.status === 'error') {

      // };
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
              <SelectItem value="custom-made">Kente</SelectItem>
              <SelectItem value="measurement">Bridal</SelectItem>
              <SelectItem value="styling">Custom made outfits</SelectItem>
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

      <div className="flex max-md:flex-col gap-4 items-start justify-between w-full md:items-center">
        <p className="text-sm text-gray-500 w-full md:max-w-[60%]">
          <span className=" dark:text-white text-black font-medium">
            Please note:
          </span>{" "}
          Booking an appointment incur a service fee, and your booking is
          confirmed only upon payment of the consultation fee.
        </p>
        <Button
          type="submit"
          className="w-full md:w-auto bg-black hover:bg-slate-500 text-white dark:bg-white dark:text-black"
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
