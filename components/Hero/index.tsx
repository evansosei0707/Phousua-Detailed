import React from "react"
import Image from "next/image"
import heroImage from "@/public/images/LADIES WITH SHOPPING BAGS.jpg"
import Link from "next/link"

const HeroSection = () => {
  return (
    <div className="bg-white relative text-white h-[400px] md:h-[500px] lg:h-[600px]  rounded-2xl overflow-hidden">
      <Link
        href="/search"
        className="absolute top-0 left-0 z-20 flex px-4 md:px-6 lg:px-8 pb-5 gap-3 md:gap-5 flex-col items-start justify-end bg-gradient-to-b from-black/20 to-black/70 w-full h-full "
      >
        <h1 className="text-white text-[30px] md:text-[40px] lg:text-[50px] whitespace-normal leading-[35px] md:leading-[45px] md:whitespace-nowrap font-medium">
          PHOSUA DETAILED COLLECTION
        </h1>
        <div className=" flex w-full max-sm:flex-col max-sm:gap-3 max-sm:items-start justify-between items-center">
          <p className="text-white text-sm font-light max-sm:w-full sm:max-w-[60%]">
            Find out our latest african finest collection. Offering our best
            quality product in at Phosua detailed collection
          </p>
          <button className=" bg-white text-black rounded-full px-8 py-3 text-sm font-medium hover:bg-black hover:text-white transition-all duration-300 text-center">
            Shop Now
          </button>
        </div>
      </Link>
      <Image src={heroImage} alt="hero" fill className="object-cover" />
    </div>
  )
}

export default HeroSection
