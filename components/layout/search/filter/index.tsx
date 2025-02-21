import { SortFilterItem } from "lib/constants"
import { Suspense } from "react"
import FilterItemDropdown from "./dropdown"
import { FilterItem } from "./item"
import { ShopifyCollection } from "@/lib/shopify/types"
import Link from "next/link"
import Image from "next/image"
import allCollectionsImage from "@/public/images/all_collections.webp"

export type ListItem = SortFilterItem | PathFilterItem
export type PathFilterItem = { title: string; path: string }

function FilterItemList({ list }: { list: ListItem[] }) {
  return (
    <>
      {list.map((item: ShopifyCollection) => (
        <Link
          key={item.handle}
          href={item.path}
          className="group flex items-center gap-3 rounded-lg p-2 transition-all hover:translate-x-1"
        >
          <div className="relative h-10 w-10 overflow-hidden whitespace-nowrap shrink-0 rounded-full ring-2 ring-transparent transition-all group-hover:ring-primary">
            <Image
              src={item?.image?.url || allCollectionsImage}
              alt={item.title}
              fill
              className="object-cover"
            />
          </div>
          <span className="text-sm text-gray-300 transition-colors group-hover:text-white">
            {item.title}
          </span>
        </Link>
      ))}
    </>
  )
}

export default function FilterList({
  list,
  title,
}: {
  list: ShopifyCollection[]
  title?: string
}) {
  return (
    <>
      <nav>
        {title ? (
          <h3 className="hidden mb-4 text-sm font-medium uppercase tracking-wider text-gray-500 md:block dark:text-neutral-400">
            {title}
          </h3>
        ) : null}
        <ul className="hidden md:block space-y-3">
          <Suspense fallback={null}>
            <FilterItemList list={list} />
          </Suspense>
        </ul>
        <ul className="md:hidden">
          <Suspense fallback={null}>
            <FilterItemDropdown list={list} />
          </Suspense>
        </ul>
      </nav>
    </>
  )
}
