import Image from "next/image"
import customGrid from "@/public/images/tag-banner.png"
import Link from "next/link"

const WearToWedding = () => {
  return (
    <div className=" flex w-full flex-col items-center h-max justify-center gap-4 mx-auto py-10">
      <div className="flex w-full rounded-xl lg:rounded-2xl overflow-hidden h-[190px] md:h-[290px] lg:h-[450px] items-center justify-center gap-4">
        <Image
          src={customGrid}
          alt="wedding"
          className="object-cover object-top w-full h-full"
        />
      </div>
      <div className=" flex flex-col items-center justify-center gap-4">
        <h2 className=" text-[25px] md:text-[38px] text-center  lg:text-[50px] font-semibold uppercase">
          Bespoke Styling Services
        </h2>
        <p className="text-secondary/60 pb-2 dark:text-secondary text-sm md:text-base font-medium text-center max-sm:max-w-[95%] lg:max-w-[500px]">
          We offer personalized styling consultations for Kente, bridal wear,
          and other custom-made ensembles. Schedule an appointment for a
          personalized consultation tailored to your unique style.
        </p>
        <Link
          prefetch={true}
          href="/appointment"
          className=" dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white hover:border-2 dark:border-white border-2 border-black hover:border-black bg-black text-white rounded-full px-[46px] py-3 text-sm font-medium hover:bg-white hover:text-black transition-all duration-300 text-center"
        >
          Schedule appointment
        </Link>
      </div>
    </div>
  )
}

export default WearToWedding
