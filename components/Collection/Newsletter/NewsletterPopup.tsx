"use client"

import Image from "next/image"
// components/NewsletterPopup.tsx
import { useState, useEffect, FormEvent, ChangeEvent } from "react"
import newsletterImage from "@/public/images/custom-made.webp"

const NewsletterPopup: React.FC = () => {
  const [email, setEmail] = useState<string>("")
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
  const [error, setError] = useState<string>("")

  useEffect(() => {
    // Check if the user has already seen the popup
    const hasSeenPopup = localStorage.getItem("newsletterPopupSeen")

    if (!hasSeenPopup) {
      // Show popup after 3 seconds of page load
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [])

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Basic email validation
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email address")
      return
    }

    try {
      // Replace with your actual API endpoint for Shopify email subscription
      const response = await fetch("/api/newsletter-signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setIsSubmitted(true)
        // Store that user has subscribed
        localStorage.setItem("newsletterPopupSeen", "true")
        // Reset form
        setEmail("")
        setError("")

        // Close popup after showing success message
        setTimeout(() => {
          setIsVisible(false)
        }, 3000)
      } else {
        const data = await response.json()
        setError(data.message || "Something went wrong. Please try again.")
      }
    } catch (error) {
      setError("Failed to subscribe. Please try again later.")
      console.error("Newsletter subscription error:", error)
    }
  }

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const closePopup = () => {
    setIsVisible(false)
    // Store that user has seen the popup
    localStorage.setItem("newsletterPopupSeen", "true")
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-fadeIn">
      <div className="flex bg-white rounded-md overflow-hidden w-11/12 max-w-4xl relative shadow-lg">
        <button
          onClick={closePopup}
          className="absolute top-3 right-3 z-10 text-gray-700 bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center"
          aria-label="Close"
        >
          ✕
        </button>

        <div className="flex-1 p-8 flex flex-col justify-center">
          <h2 className="text-center text-2xl mb-4 text-gray-800 font-mono">
            JOIN OUR INNER CIRCLE
          </h2>
          <p className="text-center mb-6 text-gray-700 font-mono">
            Be the first to experience our new collections. Get exclusive access
            to our latest designs before they&apos;re available to the public,
            plus special offers just for subscribers.
          </p>

          {isSubmitted ? (
            <div className="text-center py-4">
              <h3 className="text-xl mb-2 text-gray-800 font-mono">
                Thank You!
              </h3>
              <p className="text-gray-700 font-mono">
                You&apos;ve successfully joined our newsletter. Look out for
                exciting updates soon!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="w-full">
              <div className="mb-4">
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Your email address"
                  className="w-full h-12 border border-gray-400 rounded px-4 font-mono focus:outline-none focus:border-black"
                  aria-label="Email"
                  required
                />
                {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
              </div>

              <button
                type="submit"
                className="w-full h-14 bg-black text-white font-mono text-lg hover:bg-gray-800 transition-colors"
              >
                SUBSCRIBE
              </button>
            </form>
          )}
        </div>

        <div className="w-2/5 min-w-[400px] hidden md:block">
          <Image
            src={newsletterImage}
            alt="Newsletter promotion"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default NewsletterPopup
