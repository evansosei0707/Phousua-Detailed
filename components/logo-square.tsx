import clsx from "clsx"
import LogoIcon from "@/public/images/Phosua logo4 favicon_zoomed.png"
import Image from "next/image"

export default function LogoSquare({ size }: { size?: "sm" | undefined }) {
  return (
    <div
      className={clsx(
        "flex flex-none items-center justify-center border border-neutral-200 rounded-full bg-white dark:border-neutral-700 ",
        {
          "h-[40px] w-[40px] rounded-xl": !size,
          "h-[30px] w-[30px] rounded-lg": size === "sm",
        }
      )}
    >
      <Image src={LogoIcon} alt="logo" className=" w-full h-full" />
    </div>
  )
}
