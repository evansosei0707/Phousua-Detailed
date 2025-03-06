import { ArrowRight, Heart, Package, Recycle } from "lucide-react"
import Image from "next/image"
import heroImage from "@/public/images/aboutHero.jpeg"
import ourStory from "@/public/images/our_story.png"
import Link from "next/link"
import { socialLinks } from "@/components/layout/footer"
import generateOpenGraphImage from "@/app/opengraph-image"
import { Metadata } from "next"

const url =
  "https://res.cloudinary.com/drsjfyody/image/upload/v1741238606/home_open_graph_hpm2jt.png"
const width = 1200
const height = 630
const alt = "Featured"

generateOpenGraphImage({
  title: "About Us - Phosua Detailed",
  description: "What is new in the latest version of our code snippet!",
  imageUrl: url,
})

export const metadata: Metadata = {
  title: "About Us - Phosua Detailed",
  description:
    "High-performance ecommerce store built with Next.js, Vercel, and Shopify.",
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

// Define reusable data arrays
const statisticsData = [
  { value: "200+", label: "Happy Customers" },
  { value: "100%", label: "Sustainable Materials" },
]

const valuesData = [
  {
    icon: <Heart className="h-6 w-6 text-primary" />,
    title: "Made with Care",
    description:
      "Every piece is crafted with attention to detail and love for quality craftsmanship.",
  },
  {
    icon: <Recycle className="h-6 w-6 text-primary" />,
    title: "Sustainable Practice",
    description:
      "We use eco-friendly materials and ethical production methods to minimize our environmental impact.",
  },
  {
    icon: <Package className="h-6 w-6 text-primary" />,
    title: "Quality First",
    description:
      "We never compromise on quality, ensuring each garment stands the test of time.",
  },
]

const testimonialsData = [
  {
    quote:
      "The quality and attention to detail is unmatched. Every piece feels special.",
    author: "Rose Poku",
    location: "Accra, Ghana",
  },
  {
    quote:
      "Love their commitment to sustainability. Fashion that makes you feel good inside and out.",
    author: "Mabel Gyamfi",
    location: "Suyani, Ghana",
  },
  {
    quote:
      "These clothes have become the foundation of my wardrobe. Timeless and beautiful.",
    author: "Sofia Manrow",
    location: "Connecticut, USA",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen w-full bg-background">
      {/* Hero Section - Improved spacing and responsiveness */}
      <section className="relative h-[50vh] md:h-[65vh] w-full overflow-hidden rounded-lg mx-auto mt-4 md:mx-6 md:mt-6">
        <Image
          src={heroImage}
          alt="Fashion collection showcase"
          className="object-cover object-center"
          fill
          priority
        />
        <div className="absolute inset-0 bg-black/60" />{" "}
        {/* Increased overlay opacity for better text readability */}
        <div className="container relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-4 text-center text-white">
          <h1 className="mb-4 md:mb-6 text-3xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Crafting Sustainable Style
          </h1>
          <p className="mb-6 md:mb-8 max-w-2xl text-base md:text-xl text-gray-100">
            We believe in fashion that looks good, feels good, and does good.
            Our commitment to sustainable practices and timeless design creates
            clothing that you&apos;ll love for years to come.
          </p>
          <Link
            href="/search"
            prefetch={true}
            className="gap-2 text-sm md:text-base bg-primary text-white hover:bg-primary/90 transition-colors duration-300 font-medium items-center justify-center px-6 py-3 rounded-full inline-flex"
          >
            Shop Collection <ArrowRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-12 md:py-16 lg:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="relative h-[350px] sm:h-[400px] overflow-hidden rounded-2xl lg:h-[600px] order-2 lg:order-1">
              <Image
                src={ourStory}
                alt="Our workshop"
                className="object-cover"
                fill
              />
            </div>
            <div className="flex flex-col justify-center order-1 lg:order-2">
              <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Phosua Detailed, founded in Ghana in 2018, is a women&apos;s
                  apparel brand with an aim to create unique, exquisitely
                  detailed, and timeless pieces for the modern woman.
                </p>
                <p>
                  Our clothes tell stories and express the character of the
                  everyday woman, eliciting attention and acclaim from those who
                  wear them. Embrace the spirit of a Phosua woman.
                </p>
                <p className="mb-8">
                  Our vision is for every woman to have a Phosua Detailed outfit
                  in her closet.
                </p>
              </div>

              <div className="grid gap-8 sm:grid-cols-2 mt-6">
                {statisticsData.map((stat, index) => (
                  <div key={index}>
                    <p className="mb-2 text-3xl font-bold text-primary">
                      {stat.value}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="border-t py-12 md:py-16 lg:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="mb-8 md:mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
            Our Values
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {valuesData.map((value, index) => (
              <div
                key={index}
                className="flex h-full border-2 dark:border-primary/20 border-gray-200 rounded-2xl transition-all duration-300 hover:shadow-md hover:border-primary/50"
              >
                <div className="flex flex-col items-center p-8 text-center h-full">
                  <div className="mb-4 rounded-full bg-primary/10 p-3">
                    {value.icon}
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-16 lg:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          {/* Testimonials */}
          <div>
            <h3 className="mb-8 text-center text-2xl font-semibold text-foreground">
              What Our Customers Say
            </h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {testimonialsData.map((testimonial, i) => (
                <div
                  className="flex border-2 dark:border-primary/20 border-gray-200 rounded-2xl h-full transition-all duration-300 hover:shadow-md hover:border-primary/50"
                  key={i}
                >
                  <div className="flex flex-col gap-4 p-6 h-full">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, j) => (
                        <svg
                          key={j}
                          className="h-5 w-5 fill-primary"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-muted-foreground italic">
                      {`"${testimonial.quote}"`}
                    </p>
                    <div className="mt-auto">
                      <p className="font-semibold text-foreground">
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="border-t py-12 md:py-16 ">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <h2 className="mb-4 text-2xl font-bold text-foreground">
            Connect With Us
          </h2>
          <p className="mb-8 text-muted-foreground">
            Follow our journey and join our community of conscious fashion
            lovers.
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-6 lg:gap-8">
            {socialLinks.map((item) => (
              <li className="list-none" key={item.title}>
                <a
                  href={item.path}
                  rel="noreferrer"
                  target="_blank"
                  className="flex items-center gap-2 hover:text-primary transition-colors duration-300"
                >
                  <span className="text-[25px] text-muted-foreground group-hover:text-primary">
                    {item.icon}
                  </span>
                  <p>{item.title}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}
