// import Grid from '@/components/grid';
import Grid from "@/components/grid"
import { GridTileImage } from "@/components/grid/tile"
import { Product } from "@/lib/shopify/types"
import Link from "next/link"
import Label from "../label"

export default function ProductGridItems({
  products,
}: {
  products: Product[]
}) {
  return (
    <>
      {products.map((product) => (
        <Grid.Item key={product.handle} className=" animate-fade">
          <Link
            className="relative  h-full w-full"
            href={`/product/${product.handle}`}
            prefetch={true}
          >
            <GridTileImage
              alt={product.title}
              label={{
                title: product.title,
                amount: product.priceRange.maxVariantPrice.amount,
                currencyCode: product.priceRange.maxVariantPrice.currencyCode,
              }}
              src={product.featuredImage?.url}
              fill
              sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
              // sizes="100vw"
              className="object-cover object-top"
            />
            {product.title && product.priceRange.maxVariantPrice.amount && (
              <Label
                title={product.title}
                description={product.descriptionHtml}
                amount={product.priceRange.maxVariantPrice.amount}
                currencyCode={product.priceRange.maxVariantPrice.currencyCode}
              />
            )}
          </Link>
        </Grid.Item>
      ))}
    </>
  )
}
