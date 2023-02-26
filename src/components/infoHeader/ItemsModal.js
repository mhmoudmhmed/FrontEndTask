import { SwipeableDrawer } from "@mui/material";
import React, { useState } from "react";
import { currencyFormat } from "../hooks/currencyFormat";
import CartItems from "./CartItems";

const ItemsModal = ({ setDrawer, drawer, items, quantity }) => {
  const [price, setPrice] = useState(0);
  const uniqueItems = Array.from(new Set(items));
  return (
    <SwipeableDrawer
      anchor="right"
      open={drawer}
      onClose={() => setDrawer(false)}
      onOpen={() => setDrawer(true)}
    >
      <div className="drawer_wrapper">
        <div className="close" onClick={() => setDrawer(false)}>
          <img src={"./images/close_icon.svg"} alt="close" />
        </div>
        <p className="text">My Cart</p>
        <span>Cart Summary</span>
        {uniqueItems.length > 0 ? (
          <div className="items">
            {uniqueItems.map((item, index) => {
              return (
                <CartItems
                  key={index}
                  item={item}
                  setPrice={setPrice}
                  quantity={quantity}
                />
              );
            })}
            <p className="total_price">
              Total: {currencyFormat(quantity * price)} LE
            </p>
            <div className="modal_btns">
              <button className="review">Review Cart</button>
              <button className="complete">Complete Checkout</button>
            </div>
          </div>
        ) : (
          <p className="no_items">You have no items yet..</p>
        )}
      </div>
    </SwipeableDrawer>
  );
};

export default ItemsModal;
