import { Product } from "./product";

export interface CartItemProduct extends Product {
  quantity: number;
}

export type CartItems = {
  count: number;
  total: number;
  products: Array<CartItemProduct>;
};

export type UpdateCartType = "add" | "remove";

export type GlobalContextValues = {
  cartIsOpen: boolean;
  setCartIsOpen: Function;
  cartItems: CartItems;
  updateCart: Function;
  removeFromCart: Function;
  clearCartItems: Function;
};
