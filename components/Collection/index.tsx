import React from "react"
import ProductGridItems from "../layout/product-grid-items"
import Grid from "../grid"
import { getCollectionProducts } from "@/lib/shopify"
import Link from "next/link"

const NewCollection = async () => {
  const products = await getCollectionProducts({
    collection: "poise",
  })

  if (!products) return null

  return (
    <div className="lg:mt-10 mb-14 flex flex-col items-center w-full justify-center gap-4 mx-auto py-10">
      <div className=" flex flex-col max-sm:items-start justify-center gap-2 items-center lg:gap-3">
        <h2 className=" text-[30px] md:text-[40px]  lg:text-[55px] font-semibold uppercase">
          Latest Collection
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

      <Link
        prefetch={true}
        href="/search/poise"
        className=" dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white hover:border-2 dark:border-white border-2 border-black hover:border-black bg-black text-white rounded-full px-[46px] py-3 text-sm font-medium hover:bg-white hover:text-black transition-all duration-300 text-center"
      >
        View All
      </Link>
    </div>
  )
}

export default NewCollection
