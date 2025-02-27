"use client"

import Link from "next/link"
import { useEffect } from "react"
import { toast } from "sonner"

export function WelcomeToast() {
  useEffect(() => {
    // ignore if screen height is too small
    if (window.innerHeight < 650) return
    if (!document.cookie.includes("welcome-toast=2")) {
      toast("🛍️ Welcome to Phosua Detailed", {
        id: "welcome-toast",
        duration: Infinity,
        onDismiss: () => {
          document.cookie = "welcome-toast=2; max-age=31536000; path=/"
        },
        description: (
          <>
            Your best authentic African retail and wholesale online shop
            offering quality and affordable clothing.
            <Link
              href="/search"
              className="text-blue-600 hover:underline"
              prefetch={true}
            >
              Take a tour of into our collections
            </Link>
            .
          </>
        ),
      })
    }
  }, [])

  return null
}
