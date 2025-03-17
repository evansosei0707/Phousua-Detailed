import Grid from "@/components/grid"
import { GridTileImage } from "@/components/grid/tile"
import { Product } from "@/lib/shopify/types"
import Link from "next/link"
import Label from "../label"
// import WishlistButton from "@/components/wishlist/wishlist-button"
import WishlistButton from "../wishlist/wishlist-button"

export default function ProductGridItems({
  products,
}: {
  products: Product[]
}) {
  return (
    <>
      {products.map((product) => (
        <Grid.Item key={product.handle} className="animate-fade min-h-[550px]">
          <div className="relative flex h-full w-full flex-col">
            <Link
              className="flex h-full w-full flex-col"
              href={`/product/${product.handle}`}
              prefetch={true}
            >
              <div className="h-full w-full">
                <GridTileImage
                  alt={product.title}
                  label={{
                    title: product.title,
                    amount: product.priceRange.maxVariantPrice.amount,
                    currencyCode:
                      product.priceRange.maxVariantPrice.currencyCode,
                  }}
                  src={product.featuredImage?.url}
                  secondImage={product.images[1]?.image.url}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover xl:object-contain object-center"
                  priority={true}
                  quality={90}
                />
              </div>
              {product.title && product.priceRange.maxVariantPrice.amount && (
                <Label
                  title={product.title}
                  description={product.descriptionHtml}
                  amount={product.priceRange.maxVariantPrice.amount}
                  currencyCode={product.priceRange.maxVariantPrice.currencyCode}
                />
              )}
            </Link>
            <div className="absolute top-2 lg:top-3 lg:right-8 right-2 z-10">
              <WishlistButton product={product} />
            </div>
          </div>
        </Grid.Item>
      ))}
    </>
  )
}
