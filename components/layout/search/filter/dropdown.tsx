"use client"

import { usePathname, useSearchParams } from "next/navigation"
import { useEffect, useRef, useState } from "react"

import { ChevronDownIcon } from "@heroicons/react/24/outline"
// import type { ListItem } from "."
// import { FilterItem } from "./item"
import Link from "next/link"
import Image from "next/image"
import allCollectionsImage from "@/public/images/all_collections.webp"
import { ShopifyCollection } from "@/lib/shopify/types"

export default function FilterItemDropdown({
  list,
}: {
  list: ShopifyCollection[]
}) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [active, setActive] = useState<ShopifyCollection>()
  const [openSelect, setOpenSelect] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpenSelect(false)
      }
    }

    window.addEventListener("click", handleClickOutside)
    return () => window.removeEventListener("click", handleClickOutside)
  }, [])

  useEffect(() => {
    list.forEach((listItem: ShopifyCollection) => {
      if (
        ("path" in listItem && pathname === listItem.path) ||
        ("slug" in listItem && searchParams.get("sort") === listItem.slug)
      ) {
        setActive(listItem)
      }
    })
  }, [pathname, list, searchParams])

  return (
    <div className="relative" ref={ref}>
      <div
        onClick={() => {
          setOpenSelect(!openSelect)
        }}
        className="flex w-full items-center justify-between border rounded-md border-black/30 px-4 py-2 text-sm dark:border-white/30"
      >
        <div className="">
          <div className="group flex items-center gap-3 rounded-lg ">
            <div className="relative h-8 w-8 overflow-hidden whitespace-nowrap shrink-0 rounded-full">
              <Image
                src={active?.image?.url || allCollectionsImage}
                alt={active?.title || "collection logo"}
                fill
                className="object-cover"
              />
            </div>
            <span className="text-sm uppercase font-semibold text-black/90 dark: dark:text-neutral-400 transition-colors ">
              {active?.title}
            </span>
          </div>
        </div>
        <ChevronDownIcon className="h-4" />
      </div>
      {openSelect && (
        <div
          onClick={() => {
            setOpenSelect(false)
          }}
          className="absolute z-40 w-full  rounded-b-md bg-white p-2 shadow-md dark:bg-black"
        >
          {list.map((item: ShopifyCollection) => (
            // <FilterItem key={i}  item={item} />
            <Link
              key={item.handle}
              href={item.path}
              prefetch={true}
              className="group flex items-center gap-3 rounded-lg p-2 transition-all hover:translate-x-1"
            >
              <div className="relative h-8 w-8 overflow-hidden whitespace-nowrap shrink-0 rounded-full ring-2 ring-transparent transition-all group-hover:ring-black dark:group-hover:ring-white">
                <Image
                  src={item?.image?.url || allCollectionsImage}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-sm uppercase font-semibold text-black/90 dark: dark:text-neutral-400 transition-colors ">
                {item.title}
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
