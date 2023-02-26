import React from "react";
import "./topHeader.scss";

const TopHeader = () => {
  return (
    <div className="top">
      <div className="row">
        <div className="logo_container">
          <img alt="expand icon" src={"/images/expand.svg"} />
          <img alt="yeshtry logo" src={"/images/yeshtry.svg"} />
        </div>
        <div className="content_wrapper">
          <img alt="right" src="/images/left.svg" />
          <p className="content">
            Valentine’s Day Offers! Buy Two Get One Free
            <span className="link">Shop Now</span>
          </p>
          <img alt="right" src="/images/right.svg" />
        </div>
        <div className="flex_container">
          <img src="/images/phone.svg" alt="contact us" />
          <p className="text">Contact Us</p>
        </div>
        <div className="flex_container">
          <img src="/images/store.svg" alt="contact us" />
          <p className="text">Track Order</p>
        </div>
        <div className="flex_container">
          <img src="/images/location.svg" alt="contact us" />
          <p className="text">Find A Store</p>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
