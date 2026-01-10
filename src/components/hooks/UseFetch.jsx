import { useState, useEffect } from "react";
export function UseFetch(url = "https://dummyjson.com/products") {
  const [products, setProductsData] = useState([]);
  useEffect(() => {
    try {
      fetch(url)
        .then((resolve) => resolve.json())
        .then((data) => setProductsData(data.products));
    } catch (error) {
      throw new Error("error al extraer los datos" + error);
    }
  }, []);
  return products;
}
