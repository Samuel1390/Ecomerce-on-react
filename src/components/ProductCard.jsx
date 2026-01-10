"useClient";

import { AddToCartBtn } from "./AddToCartBtn";
import React from "react";
import "./ProductCard.css";

import { useContext } from "react";
import { GlobalContext } from "./context/GlobalContext";

const ProductCard = ({ product, order }) => {
  const {
    id,
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
    thumbnail,
  } = product;

  const discountedPrice = price - (price * discountPercentage) / 100;

  const {
    cart,
    setCart,
    isOnCart,
    handleUpdateQuantity,
    handleAddToCart,
    handleRemoveFromCart,
    clearCart,
  } = useContext(GlobalContext);

  return (
    <div className="product-card" style={{ order: order }}>
      <picture className="product-image ">
        <img
          className="object-cover"
          src={product.thumbnail}
          alt={title}
          onError={(e) => {
            e.target.src =
              "https://via.placeholder.com/300x200?text=Product+Image";
          }}
        />
        {discountPercentage > 0 && (
          <span className="discount-badge">-{discountPercentage}%</span>
        )}
      </picture>

      <div className="product-info">
        <div className="product-header">
          <h3 className="product-title">{title}</h3>
          <span className="product-category">{category}</span>
        </div>

        <p className="product-brand">{brand}</p>

        <p className="product-description">
          {description.length > 100
            ? `${description.substring(0, 100)}...`
            : description}
        </p>

        <div className="product-rating">
          {"★".repeat(Math.floor(rating))}
          <span className="rating-text">({rating})</span>
        </div>

        <div className="product-price-section">
          {discountPercentage > 0 ? (
            <>
              <span className="product-price-old">${price.toFixed(2)}</span>
              <span className="product-price">
                ${discountedPrice.toFixed(2)}
              </span>
            </>
          ) : (
            <span className="product-price">${price.toFixed(2)}</span>
          )}
        </div>

        <div className="product-footer">
          <span
            className={`stock-status ${
              stock > 0 ? "in-stock" : "out-of-stock"
            }`}
          >
            {stock > 0 ? `${stock} disponibles` : "Agotado"}
          </span>
          <AddToCartBtn product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
