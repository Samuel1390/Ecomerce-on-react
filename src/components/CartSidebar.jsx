// components/CartSidebar.jsx
import React from "react";
import { CartItemInfo } from "./CartItemInfo";
import { useContext } from "react";
import { GlobalContext } from "./context/GlobalContext";
import "./CartSidebar.css";

const CartSidebar = ({ isOpen, onClose, cartItems }) => {
  const { total } = useContext(GlobalContext);
  return (
    <>
      <div
        className={`sidebar-overlay ${isOpen ? "active" : ""}`}
        onClick={onClose}
      />

      <div className={`cart-sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h2>🛒 Tu Carrito</h2>
          <button className="close-sidebar" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="cart-items">
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <p>Tu carrito está vacío</p>
              <span>¡Añade algunos productos!</span>
            </div>
          ) : (
            cartItems.map((item) => <CartItemInfo key={item.id} item={item} />)
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-summary">
            <div className="summary-row">
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Envío</span>
              <span>Gratis</span>
            </div>
            <div className="summary-row total">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button className="checkout-btn">Proceder al Pago</button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;
