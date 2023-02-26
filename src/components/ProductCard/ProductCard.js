import React from "react";
import "./ProductCard.scss";
import ProductDetails from "./ProductDetails";
import ProductSlider from "./ProductSlider";

const ProductCard = ({ product, quantity, setQuantity, addCartItems }) => {
  return (
    <div className="card">
      <div className="row">
        <div className="card_wrapper">
          <ProductSlider product={product} />
          <ProductDetails
            product={product}
            quantity={quantity}
            setQuantity={setQuantity}
            addCartItems={addCartItems}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
