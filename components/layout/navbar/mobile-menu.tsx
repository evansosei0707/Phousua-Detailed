"use client"

import { Dialog, Transition } from "@headlessui/react"
import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"
import { Fragment, Suspense, useEffect, useState } from "react"

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
// import { Menu } from "@/lib/shopify/types"
import Search, { SearchSkeleton } from "./search"
import { ShopifyCollection } from "@/lib/shopify/types"
import Image from "next/image"
import allCollectionsImage from "@/public/images/all_collections.webp"

export default function MobileMenu({ menu }: { menu: ShopifyCollection[] }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [isOpen, setIsOpen] = useState(false)
  const openMobileMenu = () => setIsOpen(true)
  const closeMobileMenu = () => setIsOpen(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false)
      }
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [isOpen])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname, searchParams])

  return (
    <>
      <button
        onClick={openMobileMenu}
        aria-label="Open mobile menu"
        className="flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors md:hidden dark:border-neutral-700 dark:text-white"
      >
        <Bars3Icon className="h-4" />
      </button>
      <Transition show={isOpen}>
        <Dialog onClose={closeMobileMenu} className="relative z-50">
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="opacity-0 backdrop-blur-none"
            enterTo="opacity-100 backdrop-blur-[.5px]"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="opacity-100 backdrop-blur-[.5px]"
            leaveTo="opacity-0 backdrop-blur-none"
          >
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="translate-x-[-100%]"
            enterTo="translate-x-0"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-[-100%]"
          >
            <Dialog.Panel className="fixed bottom-0 left-0 right-0 top-0 flex h-full w-full flex-col bg-white pb-6 dark:bg-black">
              <div className="p-4">
                <button
                  className="mb-4 flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white"
                  onClick={closeMobileMenu}
                  aria-label="Close mobile menu"
                >
                  <XMarkIcon className="h-6" />
                </button>

                <div className="mb-4 w-full">
                  <Suspense fallback={<SearchSkeleton />}>
                    <Search inputClassName="w-full py-1" />
                  </Suspense>
                </div>
                <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-gray-500  dark:text-white/90 md:block dark:text-neutral-400">
                  Collections
                </h3>

                {menu.map((item: ShopifyCollection) => (
                  <Link
                    key={item.handle}
                    href={item.path}
                    prefetch={true}
                    className="group flex items-center gap-3 rounded-lg p-2 transition-all hover:translate-x-1"
                  >
                    <div className="relative h-10 w-10 overflow-hidden whitespace-nowrap shrink-0 rounded-full ring-2 ring-transparent transition-all group-hover:ring-black dark:group-hover:ring-white">
                      <Image
                        src={item?.image?.url || allCollectionsImage}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="text-secondary dark:text-white/90 font-medium text-lg transition-colors group-hover:text-white">
                      {item.title}
                    </span>
                  </Link>
                ))}
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  )
}
