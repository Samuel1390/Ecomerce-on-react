"use client";

import React, { useEffect, useState, useRef, useContext } from "react";
import "./ProductCard.css";
import { GlobalContext } from "./context/GlobalContext";

export const ProductNotification = () => {
  const [notification, setNotification] = useState({
    show: false,
    product: null,
    actionType: "added",
  });
  const notificationRef = useRef(null);

  useEffect(() => {
    const handleAddToCart = (e) => {
      const product = e.detail;
      setNotification({
        show: true,
        product,
        actionType: "added",
      });
    };

    const handleRemoveFromCart = (e) => {
      const product = e.detail;
      setNotification({
        show: true,
        product,
        actionType: "removed",
      });
    };

    window.addEventListener("add-to-cart", handleAddToCart);
    window.addEventListener("remove-to-cart", handleRemoveFromCart);

    return () => {
      window.removeEventListener("add-to-cart", handleAddToCart);
      window.removeEventListener("remove-to-cart", handleRemoveFromCart);
    };
  }, []);

  useEffect(() => {
    if (!notification.show || !notificationRef.current) return;

    const element = notificationRef.current;

    element.classList.remove("show-notification");
    void element.offsetWidth;
    element.classList.add("show-notification");

    const timer = setTimeout(() => {
      element.classList.remove("show-notification");
      setNotification((prev) => ({ ...prev, show: false }));
    }, 3000);

    return () => clearTimeout(timer);
  }, [notification.show]);

  return (
    <>
      {notification.product && (
        <div
          ref={notificationRef}
          className=" transition-opacity max-w-90 product-notification bg-(--background) grid grid-cols-3 p-4 rounded-xl -translate-full opacity-0 fixed -bottom-3"
        >
          <picture className="bg-(--text) size-20 rounded-full overflow-hidden">
            <img
              src={notification.product.thumbnail}
              className="size-full"
              alt={notification.product.title}
            />
          </picture>
          <div className="px-4 col-span-2 size-full text-md text-(--title)">
            <h2 className="">{notification.product.title}</h2>
            <span> was {notification.actionType} to cart</span>
          </div>
        </div>
      )}
    </>
  );
};
