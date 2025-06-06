/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline"
import { GridTileImage } from "@/components/grid/tile"
import { useProduct, useUpdateURL } from "@/components/product/product-context"
import Image from "next/image"
import WishlistButton from "@/components/wishlist/wishlist-button"

export function Gallery({
  images,
  product,
}: {
  images: { src: string; altText: string }[]
  product: any
}) {
  const { state, updateImage } = useProduct()
  const updateURL = useUpdateURL()
  const imageIndex = state.image ? parseInt(state.image) : 0

  const nextImageIndex = imageIndex + 1 < images.length ? imageIndex + 1 : 0
  const previousImageIndex =
    imageIndex === 0 ? images.length - 1 : imageIndex - 1

  const buttonClassName =
    "h-full px-6 transition-all ease-in-out hover:scale-110 hover:text-black dark:hover:text-white flex items-center justify-center"

  return (
    <form>
      <div className="relative min-h-[450px] w-full rounded-2xl overflow-hidden">
        {images[imageIndex] && (
          <Image
            className="h-full w-full lg:object-contain object-cover"
            fill
            sizes="(min-width: 1024px) 66vw, 100vw"
            alt={images[imageIndex]?.altText as string}
            src={images[imageIndex]?.src as string}
            priority={true}
          />
        )}

        {/* Wishlist button positioned in the top right corner */}
        <div className="absolute top-4 right-4 z-10">
          <WishlistButton
            product={product}
            className="bg-white/80 hover:bg-white p-2 rounded-full"
          />
        </div>

        {images.length > 1 ? (
          <div className="absolute hidden lg:flex bottom-0 md:bottom-[10%] w-full justify-center">
            <div className="mx-auto flex h-11 items-center rounded-full border border-white bg-neutral-50/80 text-neutral-500 backdrop-blur-sm dark:border-black dark:bg-neutral-900/80">
              <button
                formAction={() => {
                  const newState = updateImage(previousImageIndex.toString())
                  updateURL(newState)
                }}
                aria-label="Previous product image"
                className={buttonClassName}
              >
                <ArrowLeftIcon className="h-5" />
              </button>
              <div className="mx-1 h-6 w-px bg-neutral-500"></div>
              <button
                formAction={() => {
                  const newState = updateImage(nextImageIndex.toString())
                  updateURL(newState)
                }}
                aria-label="Next product image"
                className={buttonClassName}
              >
                <ArrowRightIcon className="h-5" />
              </button>
            </div>
          </div>
        ) : null}
      </div>

      {images.length > 1 ? (
        <ul className="mt-2 flex items-center flex-wrap justify-center gap-2 overflow-auto py-1 lg:mb-0">
          {images.map((image, index) => {
            const isActive = index === imageIndex

            return (
              <li key={image.src} className="h-20 w-20">
                <button
                  formAction={() => {
                    const newState = updateImage(index.toString())
                    updateURL(newState)
                  }}
                  aria-label="Select product image"
                  className="h-full w-full"
                >
                  <GridTileImage
                    alt={image.altText}
                    src={image.src}
                    width={80}
                    height={80}
                    active={isActive}
                    className="rounded-lg"
                  />
                </button>
              </li>
            )
          })}
        </ul>
      ) : null}
    </form>
  )
}
