// import { Carousel } from "components/carousel"
// import { ThreeItemGrid } from "components/grid/three-items"
// import Footer from "components/layout/footer"
// import AppointmentCallToAction from "@/components/appointment/appointmentCallToAction"
import { Carousel } from "@/components/carousel"
import NewCollection from "@/components/Collection"
// import AllCollection from "@/components/Collection/AllCollection"
// import { ThreeItemGrid } from "@/components/grid/three-items"
import HeroSection from "@/components/Hero"
import Footer from "@/components/layout/footer"
import WearToWedding from "@/components/Wedding"
import { Metadata } from "next"
import generateOpenGraphImage from "./opengraph-image"

const url =
  "https://res.cloudinary.com/drsjfyody/image/upload/v1741238606/home_open_graph_hpm2jt.png"
const width = 1200
const height = 630
const alt = "Featured"

generateOpenGraphImage({
  title: "Phosua Detailed",
  description:
    "Phosua Detailed, Women's apparel and accessories, made in Ghana, West Africa.",
  imageUrl: url,
})

export const metadata: Metadata = {
  title: "Book an Appointment | Fashion Studio",
  description:
    "Phosua Detailed, Women's apparel and accessories, made in Ghana, West Africa.",
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

export default function HomePage() {
  return (
    <section className="flex h-full w-full flex-col gap-10">
      <HeroSection />
      <NewCollection />
      <WearToWedding />
      <Carousel />
      {/* <AppointmentCallToAction /> */}
      <Footer />
    </section>
  )
}
