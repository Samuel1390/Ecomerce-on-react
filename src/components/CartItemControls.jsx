import { useContext } from "react";
import { GlobalContext } from "./context/GlobalContext";

export function CartItemControls({ item }) {
  const cartContext = useContext(GlobalContext);
  const { handleUpdateQuantity } = cartContext;
  return (
    <div className=" cart-item-controls">
      <div className="dark:bg-neutral-600  quantity-controls">
        <button
          className="quantity-btn"
          onClick={() =>
            handleUpdateQuantity(item.id, item.quantity - 1, item.stock)
          }
        >
          −
        </button>
        <span className="quantity">{item.quantity}</span>
        <button
          className="quantity-btn"
          onClick={() =>
            handleUpdateQuantity(item.id, item.quantity + 1, item.stock)
          }
        >
          +
        </button>
      </div>
    </div>
  );
}
