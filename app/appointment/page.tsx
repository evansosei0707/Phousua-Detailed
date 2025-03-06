import type { Metadata } from "next"
// import AppointmentForm from "./appointment-form"
// import AppointmentForm from "@/components/appointment/appointment-form"
import consultImg from "@/public/images/consultation_image.jpg"
import Image from "next/image"
import customMadeImg from "@/public/images/custom-made.webp"
import measureImg from "@/public/images/measure-session.jpg"
import stylingImg from "@/public/images/styling-session.jpg"
import NewAppointmentForm from "@/components/appointment/newAppointmentForm"
import generateOpenGraphImage from "@/app/opengraph-image"

generateOpenGraphImage({
  title: "Book an Appointment - Phosua Detailed",
  description: "What is new in the latest version of our code snippet!",
  imageUrl:
    "https://res.cloudinary.com/drsjfyody/image/upload/v1741238606/home_open_graph_hpm2jt.png",
})

export const metadata: Metadata = {
  title: "Book an Appointment | Fashion Studio",
  description:
    "Schedule a personalized appointment for custom clothing, measurements, or styling sessions.",
}

export default function AppointmentPage() {
  return (
    <div className="container mx-auto px-2 py-12">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Your Perfect Fit <span className="text-primary">Awaits</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Book a personalized appointment with our expert tailors and
              stylists to create clothing that&apos;s uniquely yours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#book-now"
                className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Book Now
              </a>
              <a
                href="#services"
                className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src={consultImg}
              fill
              alt="Tailor measuring a client"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Book an Appointment?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className=" p-6 rounded-lg shadow-sm border">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                <path d="M3 6h18" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Personalized Experience
            </h3>
            <p className="text-muted-foreground">
              Get one-on-one attention from our expert tailors who will help you
              create clothing that fits your body perfectly.
            </p>
          </div>
          <div className=" p-6 rounded-lg shadow-sm border">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Custom Designs</h3>
            <p className="text-muted-foreground">
              Bring your ideas to life with custom-made clothing designed
              specifically for your style and preferences.
            </p>
          </div>
          <div className=" p-6 rounded-lg shadow-sm border">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Expert Advice</h3>
            <p className="text-muted-foreground">
              Receive professional styling advice and recommendations tailored
              to your body type and personal style.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Appointment Services
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="group relative overflow-hidden rounded-lg">
            <Image
              src={customMadeImg}
              alt="Custom-made clothing"
              className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t  from-black/80 to-black/20 flex flex-col justify-end p-6">
              <h3 className="text-xl font-bold text-white mb-2">
                Custom-made Clothing
              </h3>
              <p className="text-white/90 mb-4">
                Create unique garments designed specifically for you, from
                concept to creation.
              </p>
              <a
                href="#book-now"
                className="text-primary-foreground bg-primary hover:bg-primary/90 inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium shadow transition-colors"
              >
                Book Custom Session
              </a>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg">
            <Image
              src={measureImg}
              alt="Measurement session"
              className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t  from-black/80 to-black/20 flex flex-col justify-end p-6">
              <h3 className="text-xl font-bold text-white mb-2">
                Measurement Session
              </h3>
              <p className="text-white/90 mb-4">
                Get professionally measured to ensure all your future purchases
                fit perfectly.
              </p>
              <a
                href="#book-now"
                className="text-primary-foreground bg-primary hover:bg-primary/90 inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium shadow transition-colors"
              >
                Book Measurement
              </a>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg">
            <Image
              src={stylingImg}
              alt="Styling session"
              className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 flex flex-col justify-end p-6">
              <h3 className="text-xl font-bold text-white mb-2">
                Styling Session
              </h3>
              <p className="text-white/90 mb-4">
                Work with our professional stylists to refresh your wardrobe and
                discover your personal style.
              </p>
              <a
                href="#book-now"
                className="text-primary-foreground bg-primary hover:bg-primary/90 inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium shadow transition-colors"
              >
                Book Styling
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mb-16 py-12  sm:px-4 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className=" p-6 rounded-lg border shadow-sm">
            <div className="flex items-center gap-1 mb-4 text-yellow-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </div>
            <p className="text-muted-foreground mb-4">
              &quot;The custom suit I had made fits perfectly! The attention to
              detail and quality of craftsmanship exceeded my
              expectations.&quot;
            </p>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="font-semibold text-primary">JD</span>
              </div>
              <div>
                <p className="font-semibold">James Davis</p>
                <p className="text-sm text-muted-foreground">
                  Custom Suit Client
                </p>
              </div>
            </div>
          </div>
          <div className=" p-6 rounded-lg border shadow-sm">
            <div className="flex items-center gap-1 mb-4 text-yellow-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </div>
            <p className="text-muted-foreground mb-4">
              &quot;My styling session was transformative! The stylist
              understood my needs and helped me find pieces that truly
              complement my body type.&quot;
            </p>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="font-semibold text-primary">SM</span>
              </div>
              <div>
                <p className="font-semibold">Sarah Miller</p>
                <p className="text-sm text-muted-foreground">Styling Client</p>
              </div>
            </div>
          </div>
          <div className=" p-6 rounded-lg border shadow-sm">
            <div className="flex items-center gap-1 mb-4 text-yellow-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </div>
            <p className="text-muted-foreground mb-4">
              &quot;Getting measured by professionals made all the difference.
              Now I know exactly what sizes to order and everything fits
              perfectly!&quot;0
            </p>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="font-semibold text-primary">RJ</span>
              </div>
              <div>
                <p className="font-semibold">Robert Johnson</p>
                <p className="text-sm text-muted-foreground">
                  Measurement Client
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
