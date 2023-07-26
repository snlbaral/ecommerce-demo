// next & packages
import { Transition, Dialog, Popover } from "@headlessui/react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";

// context
import { useGlobalContext } from "@/context/globalContext";

// component
import CartModal from "../product/cartModal";

function Navbar() {
  // context
  const { setCartIsOpen, cartItems } = useGlobalContext();

  // is mobile sidebar open
  const [isMobileSliderOpen, setIsMobileSliderOpen] =
    React.useState<boolean>(false);

  return (
    <Fragment>
      {/* cart modal for every page */}
      <CartModal />

      <div className="bg-white dark:bg-gray-900">
        {/* Mobile Slider */}
        <Transition.Root show={isMobileSliderOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setIsMobileSliderOpen}
          >
            <div className="fixed inset-0 z-40 flex justify-end">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white dark:bg-gray-800 pb-12 shadow-xl">
                  <div className="flex px-4 pb-2 pt-5">
                    <button
                      type="button"
                      className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                      onClick={() => setIsMobileSliderOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                    <div className="flow-root">
                      <Link href="/" className="-m-2 block p-2 font-medium">
                        Home
                      </Link>
                    </div>
                    <div className="flow-root">
                      <Link
                        href="/products"
                        className="-m-2 block p-2 font-medium"
                      >
                        Products
                      </Link>
                    </div>
                  </div>
                  <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                    <div className="flow-root">
                      <Link href="#" className="-m-2 block p-2 font-medium">
                        Sign in
                      </Link>
                    </div>
                    <div className="flow-root">
                      <Link href="#" className="-m-2 block p-2 font-medium">
                        Create account
                      </Link>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 px-4 py-6">
                    <a href="#" className="-m-2 flex items-center p-2">
                      <img
                        src="https://tailwindui.com/img/flags/flag-united-states.svg"
                        alt=""
                        className="block h-auto w-5 flex-shrink-0"
                      />
                      <span className="ml-3 block text-base font-medium">
                        USD
                      </span>
                    </a>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Navbar */}
        <header className="relative bg-white dark:bg-gray-900">
          <nav
            aria-label="Top"
            className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 border-b border-gray-200 dark:border-gray-700"
          >
            <div className="flex h-16 items-center">
              <div className="ml-4 flex justify-between w-full lg:w-fit lg:ml-0">
                {/* Logo */}
                <Link href="/">
                  <Image
                    src="/p-logo.png"
                    alt="Web Logo"
                    width={36}
                    height={36}
                    priority
                  />
                </Link>
                {/* Toggle Button */}
                <button
                  type="button"
                  className="rounded-md bg-white dark:bg-gray-800 p-2 text-gray-400 lg:hidden"
                  onClick={() => setIsMobileSliderOpen(true)}
                >
                  <span className="sr-only">Open menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              {/* menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  <Link
                    href={"/"}
                    className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800 dark:text-slate-200 dark:hover:text-slate-400"
                  >
                    Home
                  </Link>
                  <Link
                    href={"/products"}
                    className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800 dark:text-slate-200 dark:hover:text-slate-400"
                  >
                    Products
                  </Link>
                </div>
              </Popover.Group>

              <div className="ml-auto flex items-center">
                {/* auth */}
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <Link
                    href="#"
                    className="text-sm font-medium text-gray-700 hover:text-gray-800 dark:text-slate-200 dark:hover:text-slate-400"
                  >
                    Sign in
                  </Link>
                  <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  <Link
                    href="#"
                    className="text-sm font-medium text-gray-700 hover:text-gray-800 dark:text-slate-200 dark:hover:text-slate-400"
                  >
                    Create account
                  </Link>
                </div>
                {/* currency */}
                <div className="hidden lg:ml-8 lg:flex">
                  <a
                    href="#"
                    className="flex items-center text-gray-700 hover:text-gray-800 dark:text-slate-200 dark:hover:text-slate-400"
                  >
                    <img
                      src="https://tailwindui.com/img/flags/flag-united-states.svg"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-sm font-medium">USD</span>
                  </a>
                </div>

                {/* favorite | heart icon */}
                <div className="hidden lg:ml-8 lg:flex">
                  <a
                    href="#"
                    className="flex items-center text-gray-700 hover:text-gray-800 dark:text-slate-200 dark:hover:text-slate-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </a>
                </div>

                {/* cart icon */}
                <div className="hidden lg:ml-8 lg:flex">
                  <button
                    onClick={() => setCartIsOpen(true)}
                    className="flex items-center text-gray-700 hover:text-gray-800 dark:text-slate-200 dark:hover:text-slate-400 "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    {/* blinking cursor if cart has products */}
                    {cartItems.count > 0 ? (
                      <span className="flex absolute -mt-5 ml-4">
                        <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-green-500 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-600"></span>
                      </span>
                    ) : null}
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </Fragment>
  );
}

export default Navbar;
