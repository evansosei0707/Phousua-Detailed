/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import CartModal from "@/components/cart/modal"
import Image from "next/image"
import logo from "@/public/images/logo.png"
import whiteLogo from "@/public/images/logo_white.png"
import { Collection, Menu } from "@/lib/shopify/types"
import Link from "next/link"
import { Suspense } from "react"
import MobileMenu from "./mobile-menu"
import Search, { SearchSkeleton } from "./search"
import { getCollections } from "@/lib/shopify"
import WishlistIcon from "@/components/wishlist/wishlist-icon"
import kenteImage from "@/public/images/book1.jpg"
import CustomMadeImage from "@/public/images/book3.jpg"
import bridalImage from "@/public/images/book2.jpg"
import bridal1 from "@/public/images/bridal.png"
import bridal2 from "@/public/images/customImage.png"
import bridal3 from "@/public/images/book4.jpg"

export const navLinks = [
  {
    title: "Shop",
    path: "/search",
  },
  {
    title: "Collection",
    path: "/collections",
    hasDropdown: true,
    dropdownType: "collections",
  },
  {
    title: "Categories",
    path: "/collections",
    hasDropdown: true,
    dropdownType: "categories",
  },
  {
    title: "Book appointment",
    path: "/appointment",
    hasDropdown: true,
    dropdownType: "appointment",
  },
]

// SubDropdownMenu Component for nested dropdowns
const SubDropdownMenu = ({ items }: { items: any[] }) => {
  return (
    <div className="sub-dropdown-menu">
      <div className="grid grid-cols-1 gap-4">
        {items.map((item: any, index: number) => (
          <Link
            href={item.path}
            key={index}
            className="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
          >
            {item.image && (
              <div className="w-10 h-10 relative overflow-hidden rounded-full mr-3">
                <Image
                  src={item.image?.url || item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <span className="font-medium text-sm">{item.title}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

// DropdownItem Component that handles both regular items and items with sub-dropdowns
const DropdownItem = ({ item }: { item: any }) => {
  if (!item.hasSubDropdown) {
    return (
      <Link
        href={item.path || `/collections/${item.handle}`}
        className="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
      >
        <div className="w-12 h-12 relative overflow-hidden rounded-full mr-3">
          <Image
            src={item.image?.url}
            alt={item.title}
            fill
            className="object-cover"
          />
        </div>
        <span className="font-medium text-sm">{item.title}</span>
      </Link>
    )
  }

  return (
    <div className="sub-dropdown-container">
      <div className="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors justify-between cursor-pointer">
        <div className="flex items-center">
          <div className="w-12 h-12 relative overflow-hidden rounded-full mr-3">
            <Image
              src={item.image?.url}
              alt={item.title}
              fill
              className="object-cover"
            />
          </div>
          <span className="font-medium text-sm">{item.title}</span>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 ml-2"
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
      </div>

      <SubDropdownMenu items={item.subItems} />
    </div>
  )
}

// DropdownMenu Component (CSS-only)
const DropdownMenu = ({ items, type }: { items: any[]; type: string }) => {
  return (
    <div className="dropdown-menu">
      <div className="grid grid-cols-1 gap-4">
        {items.map((item: any, index: number) => (
          <DropdownItem key={index} item={item} />
        ))}
      </div>
    </div>
  )
}

// NavItem Component with CSS-only Dropdown
const NavItem = ({ item, subMenuData }: { item: any; subMenuData: any }) => {
  if (!item.hasDropdown) {
    return (
      <li className="nav-item">
        <Link
          href={item.path}
          prefetch={true}
          className="text-black underline-offset-4 font-medium whitespace-nowrap hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
        >
          {item.title}
        </Link>
      </li>
    )
  }

  return (
    <li className="nav-item dropdown-container">
      <Link
        href={item.path}
        prefetch={true}
        className="text-black underline-offset-4 font-medium whitespace-nowrap hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300 flex items-center dropdown-trigger"
      >
        {item.title}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 ml-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </Link>

      <DropdownMenu
        items={subMenuData[item.dropdownType]}
        type={item.dropdownType}
      />
    </li>
  )
}

export async function Navbar() {
  const collections = await getCollections()

  const menu: Collection[] = collections.filter(
    (collection) =>
      collection.handle !== "home-page-featured" &&
      collection.handle !== "blouse" &&
      collection.handle !== "two-pieces" &&
      collection.handle !== "dress" &&
      collection.handle !== "skirt" &&
      collection.handle !== ""
  )

  const categories: Collection[] = collections.filter((collection) =>
    ["blouse", "two-pieces", "dress", "skirt"].includes(collection.handle)
  )

  const subMenuData = {
    collections: menu,
    categories: categories,
    appointment: [
      {
        title: "Kente",
        path: "/appointment",
        image: {
          url: kenteImage,
        },
      },
      {
        title: "Bridal",
        path: "/appointment",
        image: {
          url: bridalImage,
        },
        hasSubDropdown: true,
        subItems: [
          {
            title: "Wedding Gown",
            path: "/appointment",
            image: bridal1,
          },
          {
            title: "Evening Gown",
            path: "/appointment",
            image: bridal2,
          },
          {
            title: "Bridal Robes",
            path: "/appointment",
            image: bridal3,
          },
          {
            title: "Wedding Guest",
            path: "/appointment",
            image: bridalImage,
          },
        ],
      },
      {
        title: "Custom Made Outfits",
        path: "/appointment",
        image: {
          url: CustomMadeImage,
        },
      },
    ],
  }

  return (
    <>
      <nav className="relative flex items-center py-5 justify-between">
        <div className="block flex-none md:hidden">
          <Suspense fallback={null}>
            <MobileMenu categories={categories} menu={menu} />
          </Suspense>
        </div>
        <div className="flex w-full items-center">
          <div className="flex w-full ml-1 lg:mr-7 md:w-2/3">
            <Link
              href="/"
              prefetch={true}
              className="mr-2 flex w-full dark:hidden items-center justify-center md:w-auto lg:mr-6"
            >
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
                  <NavItem
                    key={item.title}
                    item={item}
                    subMenuData={subMenuData}
                  />
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
    </>
  )
}
