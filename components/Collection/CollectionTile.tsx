"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Collection } from "@/lib/shopify/types"

interface CollectionTileProps {
  collection: Collection
  priority?: boolean
  variant: "large" | "medium" | "small" | "wide"
}

export default function CollectionTile({
  collection,
  priority = false,
  variant = "medium",
}: CollectionTileProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Check if we're on mobile for touch-optimized UI
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Define brick layout classes based on the tile variant
  const getVariantClass = () => {
    switch (variant) {
      case "large":
        return "sm:row-span-2" // Tall tile (2 rows)
      case "wide":
        return "sm:col-span-2" // Wide tile (2 columns)
      case "small":
      case "medium":
      default:
        return "" // Standard size (1x1)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`${getVariantClass()}`}
    >
      <Link
        href={`/search/${collection.handle}`}
        className={`
          group relative block overflow-hidden rounded-lg 
          h-[350px] sm:h-full
          transition-all duration-300 ease-in-out
          bg-gradient-to-br from-gray-100 to-gray-200
          dark:from-gray-800 dark:to-gray-900
          shadow-md hover:shadow-xl
          w-full
        `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {collection.image && (
          <div className="absolute inset-0">
            <Image
              src={collection.image.url}
              alt={collection.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className={`
                object-cover object-top
                transition-transform duration-500 ease-in-out
                ${isHovered ? "scale-110" : "scale-100"}
              `}
              priority={priority}
            />
            <div
              className={`
              absolute inset-0 bg-gradient-to-t 
              from-black to-transparent to-70%
              transition-opacity duration-300
              opacity-80 group-hover:opacity-70
            `}
            />
          </div>
        )}

        <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6 z-10">
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: isHovered && !isMobile ? -5 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
              {collection.title}
            </h2>

            <p className="text-white text-opacity-90 text-sm mb-3 line-clamp-2">
              {collection.description}
            </p>

            <span
              className={`
              inline-flex items-center justify-center
              py-2 px-4 sm:px-5
              bg-white bg-opacity-20 rounded-full text-sm font-medium
              transition-all duration-300 ease-out
              backdrop-blur-sm text-white
              group-hover:bg-opacity-30
              transform group-hover:translate-y-0
            `}
            >
              <span>Explore Collection</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-2 transform transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </motion.div>
        </div>
      </Link>
    </motion.div>
  )
}
