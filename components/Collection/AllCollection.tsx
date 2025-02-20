// import Grid from '@/components/grid';
import Grid from "@/components/grid"
import { GridTileImage } from "@/components/grid/tile"
import { ShopifyCollection } from "@/lib/shopify/types"
import Link from "next/link"

export default function AllCollection({
  collection,
}: {
  collection: ShopifyCollection
}) {
  return (
    <>
      <Grid.Item
        key={collection.handle}
        className="animate-fadeIn relative min-w-[300px] h-[400px]"
      >
        <Link
          className="relative  h-full w-full"
          href={`/search/${collection.handle}`}
          prefetch={true}
        >
          <GridTileImage
            alt={collection.title}
            src={collection.image.url}
            fill
            sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
            // sizes="100vw"
            className="object-cover rounded-2xl object-top"
          />
        </Link>
        <div className="absolute bottom-0 flex flex-col gap-4 left-0  p-4">
          <h3 className="text-white text-3xl uppercase font-semibold">
            {collection.title}
          </h3>
          <Link
            href={`/search/${collection.handle}`}
            className="text-black max-w-fit rounded-full px-5 py-3 bg-white text-center text-[12px] font-medium md:text-[14px]"
          >
            View Collection
          </Link>
        </div>
      </Grid.Item>
    </>
  )
}
