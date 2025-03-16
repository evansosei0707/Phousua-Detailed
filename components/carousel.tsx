import { getCollections } from "@/lib/shopify"
import AllCollection from "./Collection/AllCollection"

export async function Carousel() {
  const collections = await getCollections()
  const filteredCollections = collections.filter(
    (collection) =>
      collection.handle !== "home-page-featured" &&
      collection.handle !== "blouse" &&
      collection.handle !== "two-pieces" &&
      collection.handle !== "dress" &&
      collection.handle !== "skirt" &&
      collection.handle !== ""
  )

  if (!filteredCollections?.length) return null

  // Purposefully duplicating products to make the carousel loop and not run out of products on wide screens.
  const carouselCollections = [...filteredCollections, ...filteredCollections]

  return (
    <div className=" w-full flex flex-col items-start justify-center gap-4 ">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-start mb-4">
        Browse our collection
      </h2>
      <div className="w-full scrollbar-hide overflow-x-auto pb-6">
        <ul className="flex animate-carousel gap-4">
          {carouselCollections.map((collection, i) => (
            <AllCollection
              key={`${collection.handle}-${i}`}
              collection={collection}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}
