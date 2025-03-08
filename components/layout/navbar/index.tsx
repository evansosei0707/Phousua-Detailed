import CartModal from "@/components/cart/modal"
// import LogoSquare from "@/components/logo-square"
import Image from "next/image"
import logo from "@/public/images/logo.png"
import whiteLogo from "@/public/images/logo_white.png"
import { Menu } from "@/lib/shopify/types"
import Link from "next/link"
import { Suspense } from "react"
import MobileMenu from "./mobile-menu"
import Search, { SearchSkeleton } from "./search"
import { getCollections } from "@/lib/shopify"
import WishlistIcon from "@/components/wishlist/wishlist-icon"

// const { SITE_NAME } = process.env
export const navLinks: Menu[] = [
  {
    title: "Shop",
    path: "/search",
  },
  {
    title: "Collections",
    path: "/collections",
  },
  {
    title: "Book appointment",
    path: "/appointment",
  },
]

export async function Navbar() {
  // const menu = await getMenu('next-js-frontend-header-menu');
  const collections = await getCollections()

  const menu = collections.filter(
    (collection) => collection.handle !== "home-page-featured"
  )

  return (
    <nav className="relative flex items-center py-5 justify-between">
      <div className="block flex-none md:hidden">
        <Suspense fallback={null}>
          <MobileMenu menu={menu} />
        </Suspense>
      </div>
      <div className="flex w-full items-center">
        <div className="flex w-full mr-7 md:w-2/3">
          <Link
            href="/"
            prefetch={true}
            className="mr-2 flex w-full dark:hidden items-center justify-center md:w-auto lg:mr-6"
          >
            {/* <LogoSquare /> */}
            <Image
              src={logo}
              alt="phosua details logo"
              width={150}
              height={120}
            />
          </Link>
          <Link
            href="/"
            prefetch={true}
            className="mr-2 hidden dark:flex w-full items-center justify-center md:w-auto lg:mr-6"
          >
            {/* <LogoSquare /> */}
            <Image
              src={whiteLogo}
              alt="phosua details logo"
              width={150}
              height={120}
            />
          </Link>
          {navLinks.length ? (
            <ul className="hidden gap-6 text-sm md:flex md:items-center">
              {navLinks.map((item: Menu) => (
                <li key={item.title}>
                  <Link
                    href={item.path}
                    prefetch={true}
                    className="text-black underline-offset-4 font-medium whitespace-nowrap hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        <div className="hidden justify-center md:flex md:w-2/5">
          <Suspense fallback={<SearchSkeleton />}>
            <Search />
          </Suspense>
        </div>
        <div className="flex justify-end items-center gap-4 md:w-[200px]">
          <Suspense fallback={null}>
            <WishlistIcon />
          </Suspense>
          <CartModal />
        </div>
      </div>
    </nav>
  )
}
