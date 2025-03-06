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
import WearToWedding from "@/components/Wedding"

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
