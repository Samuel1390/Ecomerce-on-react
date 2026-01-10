import { useContext } from "react";
import { AddToCartIcon, RemoveToCartIcon } from "./Svgs";
import { GlobalContext } from "./context/GlobalContext";

export function AddToCartBtn({ product }) {
  const context = useContext(GlobalContext);
  const { isOnCart, handleAddToCart, handleRemoveFromCart } = context;
  const textFilter =
    product.stock > 0 && isOnCart(product.id) === -1 ? (
      <>
        <AddToCartIcon />
      </>
    ) : product.stock > 0 && isOnCart() ? (
      <>
        <RemoveToCartIcon />
      </>
    ) : (
      "Agotado"
    );
  const gradientClass =
    product.stock > 0 && isOnCart(product.id) === -1
      ? "from-purple-600 to-indigo-600"
      : product.stock > 0 && isOnCart()
      ? "from-red-600 to-amber-600"
      : "bg-neutral-500";
  return (
    <button
      className={`add-to-cart-btn bg-linear-to-r ${gradientClass} `}
      onClick={() =>
        isOnCart(product.id) >= 0
          ? handleRemoveFromCart(product)
          : handleAddToCart(product)
      }
      disabled={product.stock === 0}
    >
      {textFilter}
    </button>
  );
}
