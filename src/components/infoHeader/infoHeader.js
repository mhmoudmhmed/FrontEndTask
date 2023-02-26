import React, { useState } from "react";
import "./infoHeader.scss";
import ItemsModal from "./ItemsModal";

const InfoHeader = ({ quantity, items }) => {
  const [drawer, setDrawer] = useState(false);

  return (
    <div className="info_header">
      <div className="row">
        <div className="info_wrapper">
          <form>
            <img alt="newsletter" src={"/images/searchicon.svg"} />
            <input type="text" placeholder="Search" />
          </form>
          <img src={"/images/addidas.svg"} alt="brand" className="brand_img" />
          <div className="product_actions">
            <div className="col" onClick={() => setDrawer(true)}>
              <div className="badge">{quantity}</div>
              <img alt="cart" src={"/images/cart.svg"} /> cart
            </div>
            <div className="col">
              <img alt="wishlist" src={"/images/wishlist.svg"} /> wishlist
            </div>
            <div className="col">
              <img alt="user login" src={"/images/user.svg"} /> login
            </div>
          </div>
        </div>
      </div>
      <ItemsModal
        drawer={drawer}
        setDrawer={setDrawer}
        items={items}
        quantity={quantity}
      />
    </div>
  );
};

export default InfoHeader;
