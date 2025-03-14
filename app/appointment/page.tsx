/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next"
import Image from "next/image"
import consultImg from "@/public/images/Book an appointment photo.jpg"
import NewAppointmentForm from "@/components/appointment/newAppointmentForm"

export const metadata: Metadata = {
  title: "Book an Appointment | Fashion Studio",
  description:
    "Schedule a personalized appointment for custom clothing, measurements, or styling sessions.",
}

export default function AppointmentPage() {
  return (
    <div className="container mx-auto px-2 py-12">
      {/* Hero Section */}
      <section className="mb-16 h-[90vh] relative">
        {/* Full-height image */}
        <div className="absolute inset-0">
          <Image
            src={consultImg}
            alt="Fashion studio consultation"
            className="object-cover w-full object-center h-full"
            priority
          />
          {/* Optional overlay for better text visibility */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Animated Floating Arrow */}
        <div className="absolute bottom-12 bg-black rounded-full p-4 left-1/2 transform -translate-x-1/2">
          <a
            href="#book-now"
            aria-label="Scroll to booking form"
            className="block animate-bounce"
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14"></path>
              <path d="m19 12-7 7-7-7"></path>
            </svg>
          </a>
        </div>
      </section>

      {/* Appointment Form Section */}
      <section id="book-now" className="max-w-3xl mx-auto">
        <div className="border rounded-lg p-4 lg:p-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Book Your Appointment
          </h2>
          <NewAppointmentForm />
        </div>
      </section>
    </div>
  )
}
