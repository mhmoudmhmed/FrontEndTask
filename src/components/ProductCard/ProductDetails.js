import React, { useState } from "react";
import Line from "../Line/Line";

const ProductDetails = ({ product, quantity, setQuantity, addCartItems }) => {
  const [active, setActive] = useState(2);
  const [activeColor, setActiveColor] = useState(0);

  const onAddQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity + 1);
    }
  };
  const onRemoveQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div className="product_details">
      <div className="image_wrapper">
        <img src={product.brand} alt="product brand" />
      </div>
      <div className="product_description">
        <p className="description">{product.desc}</p>
        <div className="gender">{product.gender}</div>
      </div>
      <div className="rating">
        <div className="rating_stars">
          {[...new Array(product.total_rating)].map((arr, index) => {
            return index < Math.floor(product.rating) ? (
              <img alt="star" src={"/images/star.svg"} className="star" key={index} />
            ) : (
              <img
                alt="empty star"
                src={"/images/empty_star.svg"}
                className="empty_star"
                key={index}
              />
            );
          })}
        </div>
        <p className="rating_numbers">
          {product.rating} of {product.total_rating}
        </p>
        <p className="rating_reviews">{product.rates} Rates</p>
      </div>
      <div className="product_price">
        <p className="price">
          {product.price} <span>{product.currency}</span>
        </p>
        <p className="old_price">
          {product.old_price} <span>{product.currency}</span>
        </p>
        <div className="offer">
          <p>{product.sale} off</p>
        </div>
      </div>
      <Line />
      <div className="product_sizes">
        <p className="text">Sizes</p>
        <div className="wrapper">
          {product.sizes.map((size, index) => {
            return (
              <div
                className={`product_size ${active === index && "active_size"}`}
                key={index}
                onClick={() => setActive(index)}
              >
                <p className="size">{size.size}</p>
              </div>
            );
          })}
        </div>
      </div>
      <Line />
      <div className="product_colors">
        <p className="text">Colors</p>
        <div className="wrapper">
          {product.colors.map((color, index) => {
            return (
              <div
                className={`color_wrapper ${
                  activeColor === index && "active_color"
                }`}
                key={index}
                onClick={() => setActiveColor(index)}
              >
                <img src={color.color} alt="product color" />
              </div>
            );
          })}
        </div>
      </div>
      <Line />
      <div className="product_quantity">
        <p className="text">Quantity</p>
        <div className="add_quantity">
          <div className="click" onClick={() => onRemoveQuantity()}>
            <img src={"/images/remove.svg"} alt="remove" />
          </div>
          <p className="quantity"> {quantity} </p>
          <div className="click" onClick={() => onAddQuantity()}>
            <img src={"/images/plus.svg"} alt="plus" />
          </div>
        </div>
        <div className="btns">
          <button className="add_to_card" onClick={() => addCartItems()}>
            add to cart
          </button>
          <button className="pickup_from_store">pickup from store</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
