// src/app/wishlist/page.tsx
"use client"

import { useEffect, useState } from "react"
import { useWishlistStore } from "@/store/usewishliststore"
import Grid from "@/components/grid"
import ProductGridItems from "@/components/layout/product-grid-items"
import { Product } from "@/lib/shopify/types"

export default function WishlistPage() {
  const { items } = useWishlistStore()
  const [wishlistItems, setWishlistItems] = useState<Product[]>([])
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    setWishlistItems(items)
  }, [items])

  if (!isMounted) {
    return (
      <div className="flex h-[calc(100vh-80px)] w-full items-center justify-center">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold">Loading...</h1>
        </div>
      </div>
    )
  }

  if (wishlistItems.length === 0) {
    return (
      <div className="flex h-[calc(100vh-80px)] w-full items-center justify-center">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold">Your wishlist is empty</h1>
          <p className="mt-2 text-gray-500">
            Add some products to your wishlist
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
      <div className="py-8">
        <h1 className="text-3xl font-bold mb-6">My Wishlist</h1>
        <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <ProductGridItems products={wishlistItems} />
        </Grid>
      </div>
    </div>
  )
}
