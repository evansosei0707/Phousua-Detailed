"use client"

// components/NewsletterWrapper.tsx
import { useState, useEffect } from "react"
import dynamic from "next/dynamic"

// Dynamically import the newsletter popup with no SSR
const NewsletterPopup = dynamic(() => import("./NewsletterPopup"), {
  ssr: false,
})

const NewsletterWrapper: React.FC = () => {
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return <NewsletterPopup />
}

export default NewsletterWrapper
