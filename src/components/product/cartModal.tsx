// next & packages
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import { toast } from "react-toastify";

// context
import { useGlobalContext } from "@/context/globalContext";

// components
import CartItems from "./cartItems";

function CartModal() {
  // is cart popup modal open?
  const { cartIsOpen, setCartIsOpen, cartItems, clearCartItems } =
    useGlobalContext();

  // modal close handler
  function closeModal() {
    setCartIsOpen(false);
  }

  // complete checkout handler
  const completeCheckout = () => {
    toast.success("Your purchase is successfull.");
    clearCartItems();
  };

  return (
    <Transition.Root show={cartIsOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        {/* backshadow */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 z-40 flex">
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            {/* content */}
            <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-sm md:max-w-md flex-col overflow-y-auto bg-white dark:bg-gray-800 py-4 pb-12 shadow-xl">
              {/* content header */}
              <div className="flex items-center justify-between px-4">
                <h2 className="text-lg font-medium text-gray-900 dark:text-white">
                  Shopping Cart
                </h2>
                <button
                  type="button"
                  className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white dark:bg-gray-700 p-2 text-gray-400 dark:text-white"
                  onClick={() => setCartIsOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              {/* cart items component | content */}
              <CartItems />

              {/* checkout button | content footer */}
              <button
                className="bg-primary w-full absolute left-0 bottom-0 py-2 px-4 flex justify-between items-center hover:bg-orange-700 disabled:bg-gray-500 disabled:hover:bg-gray-500"
                disabled={cartItems.total === 0 ? true : false}
                onClick={() => completeCheckout()}
              >
                <div className="flex items-center gap-2">
                  <ShoppingCartIcon className="w-6 h-6" />
                  Checkout
                </div>
                <span className="text-xl">${cartItems.total}</span>
              </button>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
export default CartModal;
