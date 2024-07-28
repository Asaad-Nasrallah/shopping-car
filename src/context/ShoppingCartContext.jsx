/* eslint-disable react/prop-types */

/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import ShoppingCart from "../components/ShoppingCart";

const ShoppingCartContext = createContext({});
function ShoppingCartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
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
