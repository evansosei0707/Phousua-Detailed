import type { Metadata } from "next"
import NewAppointmentForm from "@/components/appointment/newAppointmentForm"
import generateOpenGraphImage from "@/app/opengraph-image"

const url =
  "https://res.cloudinary.com/drsjfyody/image/upload/v1741238606/home_open_graph_hpm2jt.png"
const width = 1200
const height = 630
const alt = "Featured"

generateOpenGraphImage({
  title: "Book an Appointment - Phosua Detailed",
  description: "What is new in the latest version of our code snippet!",
  imageUrl: url,
})

export const metadata: Metadata = {
  title: "Book an Appointment | Fashion Studio",
  description:
    "Schedule a personalized appointment for custom clothing, measurements, or styling sessions.",
  openGraph: url
    ? {
        images: [
          {
            url,
            width,
            height,
            alt,
          },
        ],
      }
    : null,
}

export default function AppointmentPage() {
  return (
    <div className="container mx-auto px-2 py-12">
      {/* Appointment Form Section */}
      <section id="book-now" className="max-w-3xl mx-auto">
        <div className=" border rounded-lg p-4 lg:p-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Book Your Appointment
          </h2>
          <NewAppointmentForm />
        </div>
      </section>
    </div>
  )
}
