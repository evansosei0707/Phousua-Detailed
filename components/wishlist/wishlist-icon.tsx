"use client"

// src/components/wishlist/wishlist-icon.tsx
import { useEffect, useState } from "react"
import Link from "next/link"
// import { useWishlistStore } from '@/store/useWishlistStore';
import { useWishlistStore } from "@/store/usewishliststore"

export default function WishlistIcon() {
  const { items } = useWishlistStore()
  const [isMounted, setIsMounted] = useState(false)
  const [count, setCount] = useState(0)

  useEffect(() => {
    setIsMounted(true)
    setCount(items.length)
  }, [items.length])

  if (!isMounted) return null

  return (
    <Link
      href="/wishlist"
      className="relative flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white"
      aria-label="Wishlist"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
      </svg>
      {count > 0 && (
        <div className="absolute right-0 top-0 -mr-2 -mt-2 h-4 w-4 rounded bg-red-500 text-[10px] font-bold text-white flex items-center justify-center">
          {count}
        </div>
      )}
    </Link>
  )
}
