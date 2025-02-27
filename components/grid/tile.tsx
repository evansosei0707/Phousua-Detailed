"use client"

/* eslint-disable jsx-a11y/alt-text */
import clsx from "clsx"
import Image from "next/image"
import { useState } from "react"

export function GridTileImage({
  isInteractive = true,
  active,
  label,
  secondImage,
  src,
  ...props
}: {
  isInteractive?: boolean
  active?: boolean
  src: string
  secondImage?: string
  label?: {
    title: string
    amount: string
    currencyCode: string
    position?: "bottom" | "center"
  }
} & React.ComponentProps<typeof Image>) {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <div
      className={clsx(
        "group flex h-full w-full items-center justify-center overflow-hidden bg-white  dark:bg-black",
        {
          relative: label,
          "border-2 border-black dark:border-white": active,
          "border-neutral-200 dark:border-neutral-800": !active,
        }
      )}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Primary Image */}
      {src && (
        <div className="relative h-full w-full">
          <Image
            className={clsx("h-full w-full object-cover", {
              "transition duration-300 ease-in-out": isInteractive,
            })}
            {...props}
            src={src}
            style={{
              opacity: isHovering && secondImage ? 0 : 1,
              transition: "opacity 300ms ease-in-out",
            }}
          />
        </div>
      )}

      {/* Secondary Image that appears on hover */}
      {secondImage && (
        <div className="absolute inset-0 h-full w-full">
          <Image
            className={clsx("h-full w-full object-cover", {
              "transition duration-300 ease-in-out": isInteractive,
            })}
            {...props}
            src={secondImage}
            style={{
              opacity: isHovering ? 1 : 0,
              transition: "opacity 300ms ease-in-out",
            }}
          />
        </div>
      )}
    </div>
  )
}
