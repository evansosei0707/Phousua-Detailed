import CartModal from "@/components/cart/modal"
// import LogoSquare from "@/components/logo-square"
import Image from "next/image"
import logo from "@/public/images/logo.png"
import { Menu } from "@/lib/shopify/types"
import Link from "next/link"
import { Suspense } from "react"
import MobileMenu from "./mobile-menu"
import Search, { SearchSkeleton } from "./search"

// const { SITE_NAME } = process.env
export const menu: Menu[] = [
  {
    title: "All",
    path: "/search",
  },
  {
    title: "Kente",
    path: "/search/kente",
  },
  {
    title: "Bridal",
    path: "/search/bridal",
  },
  {
    title: "Ready to wear",
    path: "/search/ready-to-wear",
  },
]

export async function Navbar() {
  // const menu = await getMenu('next-js-frontend-header-menu');

  return (
    <nav className="relative flex items-center py-5 justify-between">
      <div className="block flex-none md:hidden">
        <Suspense fallback={null}>
          <MobileMenu menu={menu} />
        </Suspense>
      </div>
      <div className="flex w-full items-center">
        <div className="flex w-full  mr-7 md:w-1/3">
          <Link
            href="/"
            prefetch={true}
            className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6"
          >
            {/* <LogoSquare /> */}
            <Image
              src={logo}
              alt="phosua details logo"
              width={150}
              height={120}
            />
          </Link>
          {/* <Link
            href="/"
            prefetch={true}
            className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6"
          >
            <LogoSquare />
            <div className="ml-2 flex-none text-sm font-medium uppercase md:hidden lg:block">
              {SITE_NAME}
            </div>
          </Link> */}
          {menu.length ? (
            <ul className="hidden gap-6 text-sm md:flex md:items-center">
              {menu.map((item: Menu) => (
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
        <div className="hidden justify-center md:flex md:w-3/5">
          <Suspense fallback={<SearchSkeleton />}>
            <Search />
          </Suspense>
        </div>
        <div className="flex justify-end md:w-[100px]">
          <CartModal />
        </div>
      </div>
    </nav>
  )
}
