import React from "react"
import Image from "next/image"
// import heroImage from "@/public/images/LADIES WITH SHOPPING BAGS.jpg"
import heroImage from "@/public/images/Landing Page Photo.jpg"
import Link from "next/link"

const HeroSection = () => {
  return (
    <div className="bg-white relative text-white h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden">
      <Link
        href="/search"
        className="absolute top-0 left-0 z-20 flex px-4 md:px-6 lg:px-8 pb-5 gap-3 md:gap-5 flex-col items-start justify-end bg-gradient-to-b from-black/10 to-black/50 w-full h-full "
      >
        <div className="flex w-full max-sm:flex-col max-sm:gap-3 max-sm:items-start justify-end items-center">
          <button className="bg-white text-black rounded-full px-8 py-3 text-sm font-medium hover:bg-black hover:text-white transition-all duration-300 text-center">
            Shop Now
          </button>
        </div>
      </Link>
      {/* <Image
        src={heroImage}
        alt="hero"
        fill
        className="object-cover hidden lg:block"
      /> */}
      <Image
        src={heroImage}
        alt="hero"
        fill
        className="object-cover object-top  w-full h-full"
      />
    </div>
  )
}

export default HeroSection
