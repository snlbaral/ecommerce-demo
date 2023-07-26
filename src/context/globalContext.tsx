// next & packages
import React, { useContext, useState } from "react";

// types
import {
  CartItemProduct,
  CartItems,
  GlobalContextValues,
  UpdateCartType,
} from "@/types/context";
import { Product } from "@/types/product";

// initial cart items data
const initialCartItems: CartItems = {
  count: 0,
  total: 0,
  products: [],
};

// initial context values
const initialState: GlobalContextValues = {
  cartIsOpen: false,
  setCartIsOpen: () => {},
  cartItems: initialCartItems,
  updateCart: () => {},
  removeFromCart: () => {},
  clearCartItems: () => {},
};

// context
const GlobalContext = React.createContext<GlobalContextValues>(initialState);

function GlobalContextProvider({ children }: { children: React.ReactNode }) {
  // states management
  const [cartIsOpen, setCartIsOpen] = React.useState<boolean>(false);
  const [cartItems, setCartItems] = useState<CartItems>(initialCartItems);

  /**
   * update the cart | add to cart | increase quanitity | decrease quantity
   *
   * @param {Product} product
   * @param {UpdateCartType} [action="add"]
   */
  const updateCart = (product: Product, action: UpdateCartType = "add") => {
    // create a copy
    const cartItemsCopy = { ...cartItems };

    // does product already in cart?
    const productIndex = cartItems?.products.findIndex(
      (p) => p.id === product.id
    );

    // increse/decrease products total count and total checkout price based on action provided
    if (action === "add") {
      cartItemsCopy.count += 1;
      cartItemsCopy.total = Number(
        (cartItemsCopy.total + product.price).toFixed(2)
      );
    } else {
      cartItemsCopy.count -= 1;
      cartItemsCopy.total = Number(
        (cartItemsCopy.total - product.price).toFixed(2)
      );
    }

    if (productIndex !== -1) {
      // if product exists in cart increase the product quantity | increase quantity | decrease quantity
      const previousQty = cartItemsCopy.products[productIndex].quantity;
      cartItemsCopy.products[productIndex].quantity =
        action === "add" ? previousQty + 1 : previousQty - 1;
    } else {
      // product doesn't exists in cart | first time | add to cart
      cartItemsCopy.products = [
        ...cartItems.products,
        { ...product, quantity: 1 },
      ];
    }
    // update the cart item
    setCartItems(cartItemsCopy);
    setCartIsOpen(true);
  };

  /**
   * remove product from cart
   *
   * @param {CartItemProduct} product
   */
  const removeFromCart = (product: CartItemProduct) => {
    // create a copy
    const cartItemsCopy = { ...cartItems };
    // remove the product from cart items
    const remainingProducts = cartItems.products.filter(
      (p) => p.id !== product.id
    );
    // decrease total count, total checkout price and update the products in cart items
    cartItemsCopy.count -= product.quantity;
    cartItemsCopy.total = Number(
      (cartItemsCopy.total - product.price * product.quantity).toFixed(2)
    );
    cartItemsCopy.products = remainingProducts;
    setCartItems(cartItemsCopy);
  };

  /**
   * clear cart items totally
   *
   */
  const clearCartItems = () => {
    setCartItems(initialCartItems);
    setCartIsOpen(false);
  };

  // context values
  const contextValues: GlobalContextValues = {
    cartIsOpen,
    setCartIsOpen,
    cartItems,
    updateCart,
    removeFromCart,
    clearCartItems,
  };

  return (
    <GlobalContext.Provider value={contextValues}>
      {children}
    </GlobalContext.Provider>
  );
}

// function to retreive context values
export const useGlobalContext = () => useContext(GlobalContext);

export default GlobalContextProvider;
