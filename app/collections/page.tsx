/* eslint-disable @typescript-eslint/no-explicit-any */
// src/app/collections/page.tsx
import { getCollections } from "@/lib/shopify"
import Footer from "@/components/layout/footer"
import CollectionTile from "@/components/Collection/CollectionTile"

export const metadata = {
  title: "Collections | Your Store Name",
  description: "Browse our curated collections of products.",
}

export default async function CollectionsPage() {
  const collections = await getCollections()

  // Filter out any home-page-featured collection as you've done elsewhere
  const displayCollections = collections.filter(
    (collection) =>
      !["home-page-featured", "", "bridal", "ready-to-wear", "kente"].includes(
        collection.handle
      )
  )
  //   console.log(displayCollections)

  // Define variant types for the different tile sizes
  const variants = ["large", "medium", "small", "wide"] as const

  return (
    <div className="w-full">
      <div className="mx-auto max-w-screen-2xl px-4 py-4 sm:py-8 lg:px-4">
        <h1 className="mb-4 sm:mb-8 text-3xl sm:text-4xl font-bold text-center sm:text-left dark:text-white">
          Our Collections
        </h1>

        {/* Mobile-friendly grid that becomes a beautiful masonry-style grid on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 sm:grid-flow-dense sm:auto-rows-[600px]">
          {displayCollections.map((collection, index) => (
            <CollectionTile
              key={collection.handle}
              collection={collection}
              variant={variants[index % variants.length] as any}
              priority={index < 2}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}
