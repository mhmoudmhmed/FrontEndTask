import React, { useEffect } from "react";

const CartItems = ({ index, item, setPrice, quantity }) => {
  useEffect(() => {
    setPrice(item.price);
  }, [item]);

  return (
    <div className="cart_item" key={index}>
      <div className="cart_wrapper">
        <div className="image">
          <img src={item.img} alt="product img" />
        </div>
        <div className="info">
          <p className="desc">{item.desc}</p>
          <p className="quantity">quantity: {quantity}</p>
          <div className="price_wrapper">
            <p className="price">{item.price} <span>{item.currency}</span> </p>
            <button className="remove">Remove</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
