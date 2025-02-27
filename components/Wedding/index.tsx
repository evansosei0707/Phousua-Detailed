import Image from "next/image"
import wedding from "@/public/images/wedding.jpg"
import Link from "next/link"

const WearToWedding = () => {
  return (
    <div className=" flex w-full flex-col items-center h-max justify-center gap-4 mx-auto py-10">
      <div className="flex w-full rounded-xl lg:rounded-2xl overflow-hidden h-[170px] md:h-[270px] lg:h-[300px] items-center justify-center gap-4">
        <Image src={wedding} alt="wedding" className="object-contain" />
      </div>
      <div className=" flex flex-col items-center justify-center gap-4">
        <h2 className=" text-[29px] md:text-[38px]  lg:text-[50px] font-semibold uppercase">
          Wear to Wedding?
        </h2>
        <p className="text-secondary/60 pb-2 dark:text-secondary text-sm md:text-base font-medium text-center max-sm:max-w-[95%] lg:max-w-[500px]">
          We offer a wide range of wedding accessories to help you look your
          best on your big day.
        </p>
        <Link
          prefetch={true}
          href="/search/bridal"
          className=" dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white hover:border-2 dark:border-white border-2 border-black hover:border-black bg-black text-white rounded-full px-[46px] py-3 text-sm font-medium hover:bg-white hover:text-black transition-all duration-300 text-center"
        >
          Shop Now
        </Link>
      </div>
    </div>
  )
}

export default WearToWedding
