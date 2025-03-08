"use client"

// src/components/wishlist/wishlist-button.tsx
import { useState, useEffect } from "react"
// import { useWishlistStore } from '@/store/useWishlistStore';
import { useWishlistStore } from "@/store/usewishliststore"
import { Product } from "@/lib/shopify/types"

export default function WishlistButton({
  product,
  className = "",
}: {
  product: Product
  className?: string
}) {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlistStore()
  const [isFavorite, setIsFavorite] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    setIsFavorite(isInWishlist(product.handle))
  }, [product.handle, isInWishlist])

  if (!isMounted) return null

  const toggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    if (isFavorite) {
      removeFromWishlist(product.handle)
      setIsFavorite(false)
    } else {
      addToWishlist(product)
      setIsFavorite(true)
    }
  }

  return (
    <button
      onClick={toggleWishlist}
      aria-label={isFavorite ? "Remove from wishlist" : "Add to wishlist"}
      className={`transition-all duration-200 ${className}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill={isFavorite ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`transition-colors ${isFavorite ? "text-red-500" : "text-gray-500 hover:text-red-500"}`}
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
      </svg>
    </button>
  )
}
