import generateOpenGraphImage from "@/app/opengraph-image"
import { getPage } from "@/lib/shopify"

export default async function Image({ params }: { params: { page: string } }) {
  const page = await getPage(params.page)
  const title = page.seo?.title || page.title

  generateOpenGraphImage({
    title,
  })
}
