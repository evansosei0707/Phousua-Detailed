import Link from "next/link"

import FooterMenu from "@/components/layout/footer-menu"
import LogoSquare from "@/components/logo-square"
// import { getMenu } from "@/lib/shopify"
import { Suspense } from "react"
import { navLinks } from "./navbar"
import { Collection, Menu } from "@/lib/shopify/types"
import { IoLogoWhatsapp } from "react-icons/io5"
import { FaFacebook, FaYoutube, FaInstagram, FaPinterest } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { getCollections } from "@/lib/shopify"

const { COMPANY_NAME, SITE_NAME } = process.env

const quickLinks: Menu[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About Us",
    path: "/about",
  },
  {
    title: "Contact Us",
    path: "/contact",
  },
  {
    title: "Shop",
    path: "/search",
  },
  {
    title: "Wishlist",
    path: "/wishlist",
  },
  {
    title: "Book appointment",
    path: "/appointment",
  },
]

export const socialLinks: Menu[] = [
  {
    title: "Facebook",
    path: "https://www.facebook.com/Phosua-Detailed-108957391230704",
    icon: <FaFacebook />,
  },
  {
    title: "Twitter(X)",
    path: "https://twitter.com/PDetailed",
    icon: <FaXTwitter />,
  },
  {
    title: "Instagram",
    path: "https://www.instagram.com/phosua_detailed/?hl=en",
    icon: <FaInstagram />,
  },
  {
    title: "Youtube",
    path: "https://www.youtube.com/watch?v=czsR3bqG6oE",
    icon: <FaYoutube />,
  },
  {
    title: "Whatsapp",
    path: "https://wa.me/+233243058348",
    icon: <IoLogoWhatsapp />,
  },
  {
    title: "Pinterest",
    path: "https://pin.it/2oewZrCAX",
    icon: <FaPinterest />,
  },
]

export default async function Footer() {
  const currentYear = new Date().getFullYear()
  const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : "")
  const skeleton =
    "w-full h-6 animate-pulse rounded-sm bg-neutral-200 dark:bg-neutral-700"
  // const menu = await getMenu("home-page-feature")
  const copyrightName = COMPANY_NAME || SITE_NAME || ""

  const collections = await getCollections()

  const collectionsData = collections.filter(
    (collection) =>
      collection.handle !== "home-page-featured" &&
      collection.handle !== "blouse" &&
      collection.handle !== "two-pieces" &&
      collection.handle !== "dress" &&
      collection.handle !== "skirt" &&
      collection.handle !== ""
  )

  return (
    <footer className="text-sm w-full text-neutral-500 dark:text-neutral-400">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 border-t border-neutral-200 py-12 text-sm md:flex-row md:items-start md:justify-between md:gap-12 min-[1320px]:px-0 dark:border-neutral-700">
        <div className="flex flex-col lg:w-[40%] items-start gap-6">
          <Link
            className="flex items-center gap-2 text-black md:pt-1 dark:text-white"
            href="/"
          >
            <LogoSquare size="sm" />
            <span className="uppercase font-semibold">{SITE_NAME}</span>
          </Link>
          <p className=" w-[75%] max-sm:w-full">
            Phosua Detailed, founded in Ghana in 2018, is a women’s apparel
            brand with an aim to create unique, exquisitely detailed, and
            timeless pieces for the modern woman.
          </p>
        </div>
        <div className="flex flex-col justify-start md:w-[90%] lg:w-[60%] items-start gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex flex-col items-start justify-start gap-3">
            <h3 className="text-sm font-semibold text-black dark:text-white">
              Quick Links
            </h3>
            <ul className="flex flex-col items-start gap-1">
              {quickLinks ? (
                quickLinks.map((item) => (
                  <li key={item.title}>
                    <Link href={item.path}>{item.title}</Link>
                  </li>
                ))
              ) : (
                <Suspense
                  fallback={
                    <div className="flex h-[188px] w-[200px] flex-col gap-2">
                      <div className={skeleton} />
                      <div className={skeleton} />
                      <div className={skeleton} />
                      <div className={skeleton} />
                      <div className={skeleton} />
                      <div className={skeleton} />
                    </div>
                  }
                >
                  <FooterMenu menu={navLinks} />
                </Suspense>
              )}
            </ul>
          </div>
          <div className="flex flex-col items-start justify-start gap-3">
            <h3 className="text-sm font-semibold text-black dark:text-white">
              Collections
            </h3>
            <ul className="flex flex-col items-start gap-1">
              <li>
                <Link href="/collections">All</Link>
              </li>
              {collectionsData ? (
                collectionsData.map((item: Collection) => (
                  <li key={item.handle}>
                    <Link href={item.path}>{item.title}</Link>
                  </li>
                ))
              ) : (
                <Suspense
                  fallback={
                    <div className="flex h-[188px] w-[200px] flex-col gap-2">
                      <div className={skeleton} />
                      <div className={skeleton} />
                      <div className={skeleton} />
                      <div className={skeleton} />
                      <div className={skeleton} />
                      <div className={skeleton} />
                    </div>
                  }
                >
                  <FooterMenu menu={collectionsData} />
                </Suspense>
              )}
            </ul>
          </div>
          <div className="flex flex-col items-start justify-start gap-3">
            <h3 className="text-sm font-semibold text-black dark:text-white">
              Our Socials
            </h3>
            <ul className="flex flex-col items-start gap-4">
              {socialLinks ? (
                socialLinks.map((item) => (
                  <li key={item.title}>
                    <a
                      href={item.path}
                      rel="noreferrer"
                      target="_blank"
                      className="flex justify-start items-center gap-2"
                    >
                      <span
                        className={` text-[19px] text-black dark:text-white`}
                      >
                        {item.icon}
                      </span>
                      <p>{item.title}</p>
                    </a>
                  </li>
                ))
              ) : (
                <Suspense
                  fallback={
                    <div className="flex h-[188px] w-[200px] flex-col gap-2">
                      <div className={skeleton} />
                      <div className={skeleton} />
                      <div className={skeleton} />
                      <div className={skeleton} />
                      <div className={skeleton} />
                      <div className={skeleton} />
                    </div>
                  }
                >
                  <FooterMenu menu={navLinks} />
                </Suspense>
              )}
            </ul>
          </div>
        </div>
      </div>
      {/* bottom footer */}
      <div className="border-t border-neutral-200 py-6 text-sm dark:border-neutral-700">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-1 px-4 md:flex-row md:gap-0 md:px-4 min-[1320px]:px-0">
          <p>
            &copy; {copyrightDate} {copyrightName}
            {copyrightName.length && !copyrightName.endsWith(".")
              ? "."
              : ""}{" "}
            All rights reserved.
          </p>
          <div className="flex max-sm:mt-2 flex-col md:ml-auto justify-center md:flex-row items-center lg:gap-6 gap-2">
            <p>
              <Link
                href="/shipping"
                prefetch={true}
                className="text-black dark:text-white"
              >
                Shipping
              </Link>
            </p>
            <p>
              <Link
                href="/returns"
                prefetch={true}
                className="text-black dark:text-white"
              >
                Returns & Exchange
              </Link>
            </p>
            <p>
              <Link
                href="/terms-conditions"
                prefetch={true}
                className="text-black dark:text-white"
              >
                Terms & Conditions
              </Link>
            </p>
            <p>
              <Link
                prefetch={true}
                href="/privacy-policy"
                className="text-black dark:text-white"
              >
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
