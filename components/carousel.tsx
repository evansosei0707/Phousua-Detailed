import { getCollections } from "@/lib/shopify"
import AllCollection from "./Collection/AllCollection"

export async function Carousel() {
  const collections = await getCollections()
  const filteredCollections = collections.filter(
    (collection) =>
      collection.handle !== "" && collection.handle !== "home-page-featured"
  )

  if (!filteredCollections?.length) return null

  // Purposefully duplicating products to make the carousel loop and not run out of products on wide screens.
  const carouselCollections = [...filteredCollections, ...filteredCollections]

  return (
    <div className="w-full scrollbar-hide overflow-x-auto pb-6 pt-1">
      <ul className="flex animate-carousel gap-4">
        {carouselCollections.map((collection, i) => (
          <AllCollection
            key={`${collection.handle}-${i}`}
            collection={collection}
          />
        ))}
      </ul>
    </div>
  )
}
