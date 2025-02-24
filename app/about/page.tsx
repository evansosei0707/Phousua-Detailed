import { ArrowRight, Heart, Package, Recycle } from "lucide-react"
import Image from "next/image"
import heroImage from "@/public/images/aboutHero.jpeg"
import ourStory from "@/public/images/our_story.png"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen w-full bg-background">
      {/* Hero Section */}
      <section className="relative h-[45vh] md:h-[65vh] rounded-2xl  w-full overflow-hidden">
        <Image
          src={heroImage}
          alt="Fashion collection showcase "
          className="object-cover"
          fill
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="container relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-4 text-center text-white">
          <h1 className="mb-6 text-2xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Crafting Sustainable Style
          </h1>
          <p className="mb-8 max-w-2xl text-sm text-gray-200 sm:text-xl">
            We believe in fashion that looks good, feels good, and does good.
            Our commitment to sustainable practices and timeless design creates
            clothing that you&apos;ll love for years to come.
          </p>
          <Link
            href="/search"
            prefetch={true}
            className="gap-2 text-sm md:text-base bg-white text-black flex hover:bg-gray-200 hover:text-black transition-colors duration-300 font-medium items-center justify-center px-4 py-3 rounded-full"
          >
            Shop Collection <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-[400px] overflow-hidden rounded-lg lg:h-[600px]">
              <Image
                src={ourStory}
                alt="Our workshop"
                className="object-cover"
                fill
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
                Our Story
              </h2>
              <p className="mb-4 text-muted-foreground">
                Founded in 2020, we set out to create a clothing brand that
                combines contemporary design with sustainable practices. Our
                journey began in a small workshop with a simple idea: fashion
                shouldn&apos;t come at the expense of our planet.
              </p>
              <p className="mb-8 text-muted-foreground">
                Today, we&apos;re proud to offer a collection that reflects our
                commitment to quality, sustainability, and timeless style. Every
                piece is thoughtfully designed and ethically produced, ensuring
                that you not only look good but feel good about your choices.
              </p>
              <div className="grid gap-8 sm:grid-cols-2">
                <div>
                  <p className="mb-2 text-3xl font-bold">50+</p>
                  <p className="text-sm text-muted-foreground">
                    Happy Customers
                  </p>
                </div>
                <div>
                  <p className="mb-2 text-3xl font-bold">100%</p>
                  <p className="text-sm text-muted-foreground">
                    Sustainable Materials
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="border-t bg-muted/40 py-16 lg:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
            Our Values
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex shadow-lg dark:shadow-primary/20 rounded-2xl flex-col items-center p-6 text-center">
              <div className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-primary/10 p-3">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Made with Care</h3>
                <p className="text-sm text-muted-foreground">
                  Every piece is crafted with attention to detail and love for
                  quality craftsmanship.
                </p>
              </div>
            </div>
            <div className="flex shadow-lg dark:shadow-primary/20 rounded-2xl flex-col items-center p-6 text-center">
              <div className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-primary/10 p-3">
                  <Recycle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">
                  Sustainable Practice
                </h3>
                <p className="text-sm text-muted-foreground">
                  We use eco-friendly materials and ethical production methods
                  to minimize our environmental impact.
                </p>
              </div>
            </div>
            <div className="sm:col-span-2 lg:col-span-1 shadow-lg dark:shadow-primary/20 rounded-2xl">
              <div className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-primary/10 p-3">
                  <Package className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Quality First</h3>
                <p className="text-sm text-muted-foreground">
                  We never compromise on quality, ensuring each garment stands
                  the test of time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Press & Testimonials Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          {/* Testimonials */}
          <div className="mb-16">
            <h3 className="mb-8 text-center text-2xl font-semibold">
              What Our Customers Say
            </h3>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  quote:
                    "The quality and attention to detail is unmatched. Every piece feels special.",
                  author: "Emily R.",
                  location: "New York",
                },
                {
                  quote:
                    "Love their commitment to sustainability. Fashion that makes you feel good inside and out.",
                  author: "Mabel ",
                  location: "London",
                },
                {
                  quote:
                    "These clothes have become the foundation of my wardrobe. Timeless and beautiful.",
                  author: "Sofia M.",
                  location: "Paris",
                },
              ].map((testimonial, i) => (
                <div
                  className=" flex border-2 dark:border-primary/20  border-gray-200 rounded-2xl"
                  key={i}
                >
                  <div className="flex flex-col gap-4 p-6 ">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="h-5 w-5 fill-primary"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-muted-foreground">
                      {`"${testimonial.quote}"`}
                    </p>
                    <div className="mt-2">
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Awards */}
          {/* <div className="rounded-lg bg-muted/40 p-8 text-center">
            <h3 className="mb-6 text-2xl font-semibold">Recognition</h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div>
                <p className="font-semibold">Sustainable Fashion Award 2023</p>
                <p className="text-sm text-muted-foreground">
                  Fashion Innovation Council
                </p>
              </div>
              <div>
                <p className="font-semibold">Best Ethical Brand</p>
                <p className="text-sm text-muted-foreground">
                  Eco Fashion Week 2023
                </p>
              </div>
              <div>
                <p className="font-semibold">Innovation in Textiles</p>
                <p className="text-sm text-muted-foreground">
                  Global Fashion Summit
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      {/* Contact Section */}
      <section className="border-t bg-muted/40 py-16">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <h2 className="mb-4 text-2xl font-bold">Connect With Us</h2>
          <p className="mb-8 text-muted-foreground">
            Follow our journey and join our community of conscious fashion
            lovers.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="#" className="text-muted-foreground hover:text-primary">
              Instagram
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              Twitter
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              Facebook
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
