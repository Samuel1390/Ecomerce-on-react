import { useContext, useState } from "react";
import { GlobalContext } from "./context/GlobalContext";

export const CartItemInfo = ({ item }) => {
  const cartContext = useContext(GlobalContext);
  const {
    cart,
    setCart,
    isOnCart,
    handleUpdateQuantity,
    handleAddToCart,
    handleRemoveFromCart,
  } = cartContext;
  const finalPrice = item.price - item.price * (item.discountPercentage / 100);
  return (
    <>
      <div className="cart-item">
        <picture>
          <img
            src={item.thumbnail}
            alt={item.title}
            className="cart-item-image"
          />
        </picture>
        <div className="cart-item-info">
          <h4>{item.title}</h4>
          <p className="cart-item-brand">{item.brand}</p>
          <p className="cart-item-price">${finalPrice.toFixed(2)}</p>
        </div>

        <div className="cart-item-controls">
          <div className="quantity-controls">
            <button
              className="quantity-btn"
              onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
            >
              −
            </button>
            <span className="quantity">{item.quantity}</span>
            <button
              className="quantity-btn"
              onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
            >
              +
            </button>
          </div>

          <button
            className="remove-item-btn border-red-500 border"
            onClick={() => handleRemoveFromCart(item)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#a00"
              viewBox="0 0 24 24"
              strokeWidth="2.4"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};
