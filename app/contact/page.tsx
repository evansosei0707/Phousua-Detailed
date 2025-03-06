import { Clock, Mail, MapPin, Phone } from "lucide-react"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import contactHero from "@/public/images/contact_hero.jpeg"
import { socialLinks } from "@/components/layout/footer"
import generateOpenGraphImage from "@/app/opengraph-image"

generateOpenGraphImage({
  title: "About Us - Phosua Detailed",
  description: "What is new in the latest version of our code snippet!",
  imageUrl:
    "https://res.cloudinary.com/drsjfyody/image/upload/v1741238606/home_open_graph_hpm2jt.png",
})

export const metadata: Metadata = {
  title: "About Us - Phosua Detailed",
  description:
    "High-performance ecommerce store built with Next.js, Vercel, and Shopify.",
  openGraph: {
    type: "website",
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[40vh] max-sm:rounded-xl  min-h-[400px] w-full overflow-hidden">
        <Image
          src={contactHero}
          alt="Contact us hero image"
          className="object-cover"
          fill
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="container relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-4 text-center text-white">
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Get in Touch
          </h1>
          <p className="max-w-2xl text-base text-gray-200 sm:text-xl">
            We&apos;re here to help! Find our contact information below for any
            questions about our products, orders, or general inquiries.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className=" w-full mx-auto py-12 md:py-16">
        <div className=" mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Contact Information */}
            <div className="rounded-lg border p-2 lg:p-4 shadow-sm lg:col-span-2">
              <h2 className="mb-6 text-2xl font-semibold">
                Contact Information
              </h2>
              <div className="grid gap-6">
                <div className="flex items-start gap-4">
                  <Phone className="mt-1 min-h-5 flex-shrink-0  min-w-5 text-primary" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground">
                      Main: : +233-(0)-277103031
                    </p>
                  </div>
                </div>
                <div className="flex items-start flex-shrink-0 gap-4">
                  <Mail className="mt-1 min-h-5 flex-shrink-0  min-w-5 text-primary" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">
                      General: phosuadetailed@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 min-h-5 flex-shrink-0  min-w-5 text-primary" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">
                      First Floor, Georges Plaza, North Legon, Greater Accra,
                      Ghana
                      <br className=" bg-slate-300" />
                      Ghana
                    </p>
                  </div>
                </div>
                <div className="my-6 h-px bg-border" />
                <div className="flex max-sm:flex-col max-sm:items-start max-sm:justify-center items-start gap-4">
                  <Clock className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Business Hours</p>
                    <div className="grid gap-2 text-muted-foreground">
                      <div className="flex justify-between gap-8">
                        <p>Tuesday - Friday:</p>
                        <p>10:00 AM GMT - 7:00 PM GMT</p>
                      </div>
                      <div className="flex justify-between gap-8">
                        <p>Saturday:</p>
                        <p>9:00 AM GMT - 8:00 PM GMT</p>
                      </div>
                      <div className="flex justify-between gap-8">
                        <p>Sunday:</p>
                        <p>closed</p>
                      </div>
                      <div className="flex justify-between gap-8">
                        <p>Monday:</p>
                        <p>closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links & Social */}
            <div className="rounded-lg border p-2 lg:p-4 shadow-sm">
              <h2 className="mb-6 text-2xl font-semibold">Quick Links</h2>
              <div className="grid gap-4">
                <div>
                  <p className="mb-2 font-medium">About Us</p>
                  <p className="text-sm text-muted-foreground">
                    Learn more{" "}
                    <Link
                      href="/about"
                      prefetch={true}
                      className="text-primary hover:underline"
                    >
                      about us
                    </Link>
                    .
                  </p>
                </div>
                <div>
                  <p className="mb-2 font-medium">Shipping Information</p>
                  <p className="text-sm text-muted-foreground">
                    Learn about our{" "}
                    <Link
                      href="/privacy-policy"
                      prefetch={true}
                      className="text-primary hover:underline"
                    >
                      shipping policies
                    </Link>
                    .
                  </p>
                </div>
                <div>
                  <p className="mb-2 font-medium">Returns & Exchanges</p>
                  <p className="text-sm text-muted-foreground">
                    View our{" "}
                    <Link
                      href="/privacy-policy"
                      prefetch={true}
                      className="text-primary hover:underline"
                    >
                      return policy
                    </Link>
                    .
                  </p>
                </div>
                <div className="my-6 h-px bg-border" />
                <div>
                  <p className="mb-4 font-medium">Connect With Us</p>
                  <div className="flex gap-4">
                    {socialLinks.map((link) => (
                      <a
                        key={link.title}
                        href={link.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                      >
                        <span className="text-2xl">{link.icon}</span>
                        <span className="sr-only">{link.title}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="mt-8 overflow-hidden rounded-lg border bg-muted">
            <iframe
              title="Store Location"
              src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d127046.95525991553!2d-0.27554837273567834!3d5.681693393682041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0xfdf9db570e0fba1%3A0x8f88c31b0d098301!2sPhosua%20Detailed%2C%20Accra!3m2!1d5.6815283999999995!2d-0.1931445!5e0!3m2!1sen!2sgh!4v1740136120542!5m2!1sen!2sgh"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
