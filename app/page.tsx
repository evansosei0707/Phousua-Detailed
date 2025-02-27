// import { Carousel } from "components/carousel"
// import { ThreeItemGrid } from "components/grid/three-items"
// import Footer from "components/layout/footer"
import { Carousel } from "@/components/carousel"
import NewCollection from "@/components/Collection"
// import AllCollection from "@/components/Collection/AllCollection"
// import { ThreeItemGrid } from "@/components/grid/three-items"
import HeroSection from "@/components/Hero"
import Footer from "@/components/layout/footer"
import WearToWedding from "@/components/Wedding"

export const metadata = {
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
      <Footer />
    </section>
  )
}
