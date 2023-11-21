import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({});

export function CartContextProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);

  function addProduct(productId) {
    setCartProducts((prev) => [...prev, productId]);
  }

  function removeProductFromCart(productId) {
    setCartProducts((prev) => {
      const pos = prev.indexOf(productId);
      console.log("POSITION", pos);
      if (pos !== -1) {
        return prev.filter((value, idx) => idx !== pos);
      }
      return prev;
    });
  }
  function clearCart() {
    setCartProducts([]);
  }

  useEffect(() => {
    if (typeof localStorage !== "undefined") {
      const cart = JSON.parse(localStorage.getItem("cart"));
      if (cart?.length > 0) {
        setCartProducts(cart);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartProducts));
  }, [cartProducts]);

  console.log(cartProducts);

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        setCartProducts,
        addProduct,
        removeProductFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
