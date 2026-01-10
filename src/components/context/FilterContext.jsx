"use client";
import { createContext, useState } from "react";
import { UseFetch } from "../hooks/UseFetch";

export const filterContext = createContext();

export const FilterProvider = ({ children }) => {
  const products = UseFetch("https://dummyjson.com/products");
  const [filter, setFilter] = useState({
    price: 0,
    category: "all",
    inputValue: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  const filterProducts = (products) => {
    return products.filter((product) => {
      const { title, price, category } = product;
      return (
        (title
          .toLowerCase()
          .trim()
          .includes(filter.inputValue.toLowerCase().trim()) ||
          filter.inputValue.trim().length === 0) &&
        (category === filter.category || filter.category === "all") &&
        price >= filter.price
      );
    });
  };
  const filteredProducts = filterProducts(products);
  return (
    <filterContext.Provider
      value={{
        filter,
        setFilter,
        filteredProducts,
        products,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </filterContext.Provider>
  );
};
