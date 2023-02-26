import React from "react";
import "./SimilarProducts.scss";
import Card from "./Card";
import { products } from "../../services/Api";

const SimilarProducts = () => {
  const filteredProducts = products.filter((product) => product.id !== 1);

  return (
    <div className="similar_products_row">
      <div className="similar_products_container">
        <div className="info">
          <p className="title">Similar Products</p>
          <span className="desc">You may like these products also</span>
        </div>
        <div className="card_wrapper">
          {filteredProducts.map((card, index) => {
            return <Card card={card} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SimilarProducts;
