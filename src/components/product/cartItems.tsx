// next & packages
import React from "react";

// context
import { useGlobalContext } from "@/context/globalContext";

function CartItems() {
  // context
  const { cartItems, removeFromCart, updateCart } = useGlobalContext();

  return (
    <div className="overflow-y-auto">
      {/* cart items */}
      {cartItems.products.map((product) => {
        return (
          <div className="rounded-lg">
            <div className="justify-between mb-6 rounded-lg text-gray-800 dark:text-slate-200 p-6 grid grid-cols-1 md:grid-cols-3 w-full space-x-4 shadow-md">
              {/* cart product image */}
              <img
                src={product.image}
                className="w-full rounded-lg col-span-1 max-h-[120px] object-contain mb-4 md:mb-0"
              />
              <div className="ml-2 grid grid-cols-2 col-span-1 md:col-span-2 w-full space-x-2">
                <h2 className="text-sm font-bold">{product.title}</h2>
                <div className="mt-4 flex flex-wrap justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                  <div className="flex items-center border-gray-100 dark:border-gray-900  mb-4 md:mb-0">
                    {/* minus icon */}
                    <button
                      disabled={product.quantity === 1 ? true : false}
                      className="cursor-pointer rounded-l bg-gray-100 dark:bg-gray-900 hover:bg-primary hover:text-blue-50 py-1 px-3.5 duration-100 disabled:hover:bg-transparent disabled:bg-transparent disabled:cursor-not-allowed"
                      onClick={() => updateCart(product, "minus")}
                    >
                      {" "}
                      -{" "}
                    </button>

                    {/* cart quantity */}
                    <input
                      className="h-8 w-8 border bg-white dark:bg-black text-black dark:text-white text-center text-xs outline-none dark:border-gray-800"
                      type="number"
                      value={product.quantity}
                      min="1"
                      readOnly
                    />

                    {/* plus icon */}
                    <button
                      className="cursor-pointer rounded-r bg-gray-100 dark:bg-gray-900 hover:bg-primary hover:text-blue-50 py-1 px-3 duration-100"
                      onClick={() => updateCart(product)}
                    >
                      {" "}
                      +{" "}
                    </button>
                  </div>

                  <div className="flex flex-wrap items-center space-x-4">
                    <p className="text-sm">${product.price}</p>
                    {/* cross icon */}
                    <button
                      onClick={() => removeFromCart(product)}
                      className="rounded-sm bg-red-600 hover:bg-red-700 py-1 px-2 duration-100"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CartItems;
