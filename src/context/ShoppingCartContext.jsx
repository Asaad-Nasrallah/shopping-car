/* eslint-disable react/prop-types */

/* eslint-disable no-unused-vars */
import { useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import ShoppingCart from "../components/ShoppingCart";
import { json } from "react-router-dom";

const ShoppingCartContext = createContext({});
let initialCartItems = [];
try {
  const storedCartItems = localStorage.getItem("shopping-cart");
  if (storedCartItems && storedCartItems !== "undefined") {
    initialCartItems = JSON.parse(storedCartItems);
  }
} catch (e) {
  console(e);
}

function ShoppingCartProvider({ children }) {
  const [cartItems, setCartItems] = useState(initialCartItems);
  useEffect(() => {
    localStorage.setItem("shopping-cart", JSON.stringify(cartItems));
  }, [cartItems]);
  const totalQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );
  const getItemQuantity = (id) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };

  const addItem = (id) => {
    setCartItems((prevCartItems) => {
      if (prevCartItems.find((item) => item.id == id)) {
        return prevCartItems.map((item) =>
          item.id == id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCartItems, { id, quantity: 1 }];
      }
    });
  };

  const deleteItem = (id) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === id);
      if (existingItem && existingItem.quantity > 1) {
        return prevItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        );
      } else {
        return prevItems.filter((item) => item.id !== id);
      }
    });
  };
  return (
    <ShoppingCartContext.Provider
      value={{ cartItems, getItemQuantity, addItem, deleteItem, totalQuantity }}
    >
      {children}
      <ShoppingCart />
    </ShoppingCartContext.Provider>
  );
}

export default ShoppingCartProvider;
// eslint-disable-next-line react-refresh/only-export-components
export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};
