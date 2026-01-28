"use client";
import { useState, createContext } from "react";

export const GlobalContext = createContext();
const WINDOW_APPEND_EVENT = new Event("add-to-cart");
const WINDOW_REMOVE_EVENT = new Event("remove-to-cart");

export function GlobalProvider({ children }) {
  const [total, setTotal] = useState(0);
  const [cart, setCart] = useState([]);
  const [registeredProducts, setRegisteredProducts] = useState([]);

  const handleUpdateQuantity = (itemId, updatedQuantity, stock) => {
    if (updatedQuantity >= 1) {
      if (isOnCart(itemId) >= 0 && stock - updatedQuantity >= -1) {
        const newCart = cart.slice();
        newCart[isOnCart(itemId)].quantity = updatedQuantity;
        setCart(newCart);
        handleTotal(newCart);
        return newCart;
      }
    }
    if (stock - updatedQuantity < -1) {
      console.log("No se puede reducir más la cantidad");
      return;
    }
    const newCart = cart.filter((item) => item.id !== itemId);
    setCart(newCart);
    handleTotal(newCart);
    return newCart;
  };

  const isOnCart = (productId) => {
    const number = cart.findIndex((item) => item.id === productId);
    return number;
  };

  const handleAddToCart = (product) => {
    const newCart = cart.slice();
    const onCartIndex = isOnCart(product.id);
    if (onCartIndex !== -1) {
      newCart[onCartIndex].quantity += 1;

      setCart(newCart);
      handleTotal(newCart);
      window.dispatchEvent(WINDOW_APPEND_EVENT),
        setRegisteredProducts((prev) => [...prev, product]);
      const addEvent = new CustomEvent("add-to-cart", { detail: product });
      window.dispatchEvent(addEvent);
      return newCart;
    }
    newCart.push({ ...product, quantity: 1, stock: product.stock - 1 });

    setCart((prevItems) => [
      ...prevItems,
      { ...product, quantity: 1, stock: product.stock - 1 },
    ]);

    const addEvent = new CustomEvent("add-to-cart", { detail: product });
    window.dispatchEvent(addEvent);

    handleTotal(newCart);
    setRegisteredProducts((prev) => [...prev, product]);
    return;
  };

  const handleRemoveFromCart = (product) => {
    const newCart = cart.filter((item) => item.id !== product.id);
    setCart(newCart);
    handleTotal(newCart);

    const removeEvent = new CustomEvent("remove-to-cart", { detail: product });
    window.dispatchEvent(removeEvent);
    return newCart;
  };

  const clearCart = () => {
    setCart([]);
    return handleTotal();
  };
  const handleTotal = (newCart) => {
    const totalPrice = newCart.reduce((total, item) => {
      return (
        total +
        item.quantity *
          (item.price - item.price * (item.discountPercentage / 100))
      );
    }, 0);
    return setTotal(totalPrice);
  };
  return (
    <GlobalContext.Provider
      value={{
        cart,
        setCart,
        isOnCart,
        handleUpdateQuantity,
        handleAddToCart,
        handleRemoveFromCart,
        clearCart,
        total,
        registeredProducts,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
