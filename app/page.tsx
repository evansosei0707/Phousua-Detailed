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
// import generateOpenGraphImage from "@/components/opengraph-image"
import generateOpenGraphImage from "./opengraph-image"
import WearToWedding from "@/components/Wedding"
import { Metadata } from "next"

generateOpenGraphImage({
  title: "Phosua Detailed",
  description: "What is new in the latest version of our code snippet!",
  imageUrl:
    "https://res.cloudinary.com/drsjfyody/image/upload/v1741119930/open_graph_real_qxy7yi.png",
})

export const metadata: Metadata = {
  title: "Phosua Detailed",
  description:
    "High-performance ecommerce store built with Next.js, Vercel, and Shopify.",
  openGraph: {
    type: "website",
  },
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
