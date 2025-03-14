import { AddToCart } from "@/components/cart/add-to-cart"
import Price from "@/components/price"
import Prose from "@/components/prose"
import { Product } from "@/lib/shopify/types"
import { VariantSelector } from "./variant-selector"
import { SizeGuide } from "../chart/size-guide"

export function ProductDescription({ product }: { product: Product }) {
  return (
    <>
      <div className="mb-6 flex flex-col border-b pb-6 dark:border-neutral-700">
        <h1 className="mb-2 text-5xl font-medium">{product.title}</h1>
        <div className="mr-auto w-auto rounded-full bg-black dark:bg-white dark:text-black p-2 text-sm text-white">
          <Price
            amount={product.priceRange.maxVariantPrice.amount}
            currencyCode={product.priceRange.maxVariantPrice.currencyCode}
          />
        </div>
      </div>
      {product.descriptionHtml ? (
        <Prose
          className="mb-6 text-sm leading-tight dark:text-white/[60%]"
          html={product.descriptionHtml}
        />
      ) : null}
      <VariantSelector options={product.options} variants={product.variants} />

      {/* Add the SizeGuide component here */}
      <SizeGuide />

      <AddToCart product={product} />
    </>
  )
}
