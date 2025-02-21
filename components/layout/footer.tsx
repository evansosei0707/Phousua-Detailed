import Link from "next/link"

import FooterMenu from "@/components/layout/footer-menu"
import LogoSquare from "@/components/logo-square"
// import { getMenu } from "@/lib/shopify"
import { Suspense } from "react"
import { menu } from "./navbar"
import { Menu } from "@/lib/shopify/types"
import { IoLogoWhatsapp } from "react-icons/io5"
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa"

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
    title: "contact Us",
    path: "/contact",
  },
  {
    title: "Store",
    path: "/search",
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
    icon: <FaTwitter />,
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
]

export default async function Footer() {
  const currentYear = new Date().getFullYear()
  const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : "")
  const skeleton =
    "w-full h-6 animate-pulse rounded-sm bg-neutral-200 dark:bg-neutral-700"
  // const menu = await getMenu("home-page-feature")
  const copyrightName = COMPANY_NAME || SITE_NAME || ""

  return (
    <footer className="text-sm w-full text-neutral-500 dark:text-neutral-400">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 border-t border-neutral-200 py-12 text-sm md:flex-row md:items-start md:justify-between md:gap-12 min-[1320px]:px-0 dark:border-neutral-700">
        <div className="flex flex-col items-start gap-6">
          <Link
            className="flex items-center gap-2 text-black md:pt-1 dark:text-white"
            href="/"
          >
            <LogoSquare size="sm" />
            <span className="uppercase">{SITE_NAME}</span>
          </Link>
          <p className=" w-[50%] max-sm:w-full">
            Phosua Detailed is your number one stop for quality and affordable
            african, bridal and special occasion clothing.
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
                  <FooterMenu menu={menu} />
                </Suspense>
              )}
            </ul>
          </div>
          <div className="flex flex-col items-start justify-start gap-3">
            <h3 className="text-sm font-semibold text-black dark:text-white">
              Collections
            </h3>
            <ul className="flex flex-col items-start gap-1">
              {menu ? (
                menu.map((item) => (
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
                  <FooterMenu menu={menu} />
                </Suspense>
              )}
            </ul>
          </div>
          <div className="flex flex-col items-start justify-start gap-3">
            <h3 className="text-sm font-semibold text-black dark:text-white">
              Our Socials
            </h3>
            <ul className="flex flex-col items-start gap-1">
              {socialLinks ? (
                socialLinks.map((item) => (
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
                  <FooterMenu menu={menu} />
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
                href="/privacy-policy"
                className="text-black dark:text-white"
              >
                Terms & Conditions
              </Link>
            </p>
            <p>
              <Link
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
