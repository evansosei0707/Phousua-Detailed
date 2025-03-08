import { CartProvider } from "@/components/cart/cart-context"
import { Navbar } from "@/components/layout/navbar"
import { WelcomeToast } from "@/components/welcome-toast"
import { getCart } from "@/lib/shopify"
import { baseUrl } from "@/lib/utils"
import { ReactNode } from "react"
// import { Toaster } from "sonner"
import { Poppins } from "next/font/google"
import { Toaster } from "@/components/ui/sonner"
import "./globals.css"
import generateOpenGraphImage from "./opengraph-image"
import NewsletterWrapper from "@/components/Collection/Newsletter/NewsletterWrapper"

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
})

const { SITE_NAME } = process.env

const url =
  "https://res.cloudinary.com/drsjfyody/image/upload/v1741238606/home_open_graph_hpm2jt.png"
const width = 1200
const height = 630
const alt = "Featured"

generateOpenGraphImage({
  title: "Phosua Detailed",
  description: "What is new in the latest version of our code snippet!",
  imageUrl: url,
})

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: SITE_NAME!,
    template: `%s | ${SITE_NAME}`,
  },
  robots: {
    follow: true,
    index: true,
  },
  openGraph: url
    ? {
        images: [
          {
            url,
            width,
            height,
            alt,
          },
        ],
      }
    : null,
}

export default async function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  // Don't await the fetch, pass the Promise to the context provider
  const cart = getCart()

  return (
    <html lang="en" className={poppins.className}>
      <body className="bg-neutral-50 h-full text-black selection:bg-teal-300 dark:bg-neutral-900 dark:text-white dark:selection:bg-pink-500  max-w-[1500px] mx-auto px-4 md:px-6 lg:px-10 dark:selection:text-white">
        <CartProvider cartPromise={cart}>
          <Navbar />
          <main className=" w-full h-full">
            {children}
            <Toaster closeButton />
            <WelcomeToast />
          </main>
          {/* <Footer /> */}
        </CartProvider>
        <NewsletterWrapper />
      </body>
    </html>
  )
}
