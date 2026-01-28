import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "./context/GlobalContext";

export function ProductFooterStock({ product }) {
  const { cart, isOnCart } = useContext(GlobalContext);
  const [index, setIndex] = useState(isOnCart(product.id));
  const [showStock, setShowStock] = useState(product.stock);
  const [stockClass, setStockClass] = useState("in-stock");
  useEffect(() => {
    if (index === -1) {
      setIndex(isOnCart(product.id));
      return;
    }
    setShowStock(product.stock - cart[index].quantity);
    setStockClass(setShowStock > 0 ? "in-stock" : "out-of-stock");
  }, [cart]);
  return <span className={`stock-status ${stockClass}`}>{showStock}</span>;
}
