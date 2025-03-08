import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { GridTileImage } from "@/components/grid/tile"
import Footer from "@/components/layout/footer"
import { Gallery } from "@/components/product/gallery"
import { ProductProvider } from "@/components/product/product-context"
import { ProductDescription } from "@/components/product/product-description"
import { HIDDEN_PRODUCT_TAG } from "@/lib/constants"
import { getProduct, getProductRecommendations } from "@/lib/shopify"
import { mediaImage } from "@/lib/shopify/types"
import Link from "next/link"
import { Suspense } from "react"
import generateOpenGraphImage from "@/app/opengraph-image"
import WishlistButton from "@/components/wishlist/wishlist-button"

export async function generateMetadata(props: {
  params: Promise<{ handle: string }>
}): Promise<Metadata> {
  const params = await props.params
  const product = await getProduct(params.handle)

  if (!product) return notFound()

  const { url, width, height, altText: alt } = product.featuredImage || {}
  const indexable = !product.tags.includes(HIDDEN_PRODUCT_TAG)

  await generateOpenGraphImage({
    title: product.title,
    description: product.description,
    imageUrl: url,
  })

  return {
    title: product.seo.title || product.title,
    description: product.seo.description || product.description,
    robots: {
      index: indexable,
      follow: indexable,
      googleBot: {
        index: indexable,
        follow: indexable,
      },
    },
    openGraph: url
      ? {
          images: [
            {
              url,
              width,
              height,
              alt,
            },
          ],
        }
      : null,
  }
}

export default async function ProductPage(props: {
  params: Promise<{ handle: string }>
}) {
  const params = await props.params
  const product = await getProduct(params.handle)

  if (!product) return notFound()

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.description,
    image: product.featuredImage.url,
    offers: {
      "@type": "AggregateOffer",
      availability: product.variants[0]?.availableForSale
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      priceCurrency: product.priceRange.minVariantPrice.currencyCode,
      highPrice: product.priceRange.maxVariantPrice.amount,
      lowPrice: product.priceRange.minVariantPrice.amount,
    },
  }

  return (
    <ProductProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd),
        }}
      />
      <div className="mx-auto w-full bg-white dark:bg-black/50">
        <div className="flex flex-col w-full lg:flex-row lg:gap-8 ">
          <div className="h-full w-full basis-full lg:basis-3/6">
            <Suspense
              fallback={
                <div className="relative aspect-square h-full max-h-[550px] w-full overflow-hidden" />
              }
            >
              <Gallery
                images={product.images
                  .slice(0, 5)
                  .map((medium: mediaImage) => ({
                    src: medium.image.url,
                    altText: medium.alt,
                  }))}
                product={product}
              />
            </Suspense>
          </div>

          <div className="basis-full max-md:mt-4 lg:basis-2/6">
            <Suspense fallback={null}>
              <ProductDescription product={product} />
            </Suspense>
          </div>
        </div>
        <RelatedProducts id={product.id} />
      </div>
      <Footer />
    </ProductProvider>
  )
}

async function RelatedProducts({ id }: { id: string }) {
  const relatedProducts = await getProductRecommendations(id)

  if (!relatedProducts.length) return null

  return (
    <div className="py-8">
      <h2 className="mb-4 text-2xl font-bold">Related Products</h2>
      <ul className="flex w-full gap-4 overflow-x-auto pt-1">
        {relatedProducts.map((product) => (
          <li
            key={product.handle}
            className="aspect-[3/4] w-full flex-none min-[475px]:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5"
          >
            <div className="relative h-full w-full">
              <Link
                className="block h-full w-full"
                href={`/product/${product.handle}`}
                prefetch={true}
              >
                <GridTileImage
                  alt={product.title}
                  label={{
                    title: product.title,
                    amount: product.priceRange.maxVariantPrice.amount,
                    currencyCode:
                      product.priceRange.maxVariantPrice.currencyCode,
                  }}
                  src={product.featuredImage?.url}
                  fill
                  sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover object-top"
                />
              </Link>
              <div className="absolute top-2 right-2 z-10">
                <WishlistButton
                  product={product}
                  className="bg-white/80 hover:bg-white p-1 rounded-full"
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
