import React from "react"
import ProductGridItems from "../layout/product-grid-items"
import Grid from "../grid"
import { getCollectionProducts } from "@/lib/shopify"

const NewCollection = async () => {
  const products = await getCollectionProducts({
    collection: "home-page-featured",
  })

  if (!products) return null

  return (
    <div className="lg:mt-10 flex flex-col items-center w-full justify-center gap-4 mx-auto py-10">
      <div className=" flex flex-col max-sm:items-start justify-center gap-2 items-center lg:gap-3">
        <h2 className=" text-[30px] md:text-[40px]  lg:text-[55px] font-semibold uppercase">
          New Collection
        </h2>
        <p className="text-secondary/60 dark:text-secondary md:text-lg">
          Our latest collection, where classic and contemporary converge in
          perfect harmony.
        </p>
      </div>
      {products.length > 0 ? (
        <Grid className="grid-cols-1 h-full  mt-3 w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <ProductGridItems products={products} />
        </Grid>
      ) : null}
    </div>
  )
}

export default NewCollection
