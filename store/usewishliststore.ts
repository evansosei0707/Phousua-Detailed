// src/store/useWishlistStore.ts
import { create } from "zustand"
import { persist } from "zustand/middleware"
import { Product } from "@/lib/shopify/types"

interface WishlistState {
  items: Product[]
  addToWishlist: (product: Product) => void
  removeFromWishlist: (productHandle: string) => void
  isInWishlist: (productHandle: string) => boolean
  clearWishlist: () => void
}

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      items: [],

      addToWishlist: (product) => {
        const { items } = get()
        const existingProduct = items.find(
          (item) => item.handle === product.handle
        )

        if (!existingProduct) {
          set({ items: [...items, product] })
        }
      },

      removeFromWishlist: (productHandle) => {
        const { items } = get()
        set({
          items: items.filter((product) => product.handle !== productHandle),
        })
      },

      isInWishlist: (productHandle) => {
        const { items } = get()
        return items.some((product) => product.handle === productHandle)
      },

      clearWishlist: () => set({ items: [] }),
    }),
    {
      name: "wishlist-storage",
      skipHydration: typeof window === "undefined",
    }
  )
)
