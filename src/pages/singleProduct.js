import React, { useState } from "react";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import Footer from "../components/Footer/Footer";
import InfoHeader from "../components/infoHeader/infoHeader";
import Navbar from "../components/Navbar/Navbar";
import ProductCard from "../components/ProductCard/ProductCard";
import SimilarProducts from "../components/SimilarProducts/SimilarProducts";
import TopHeader from "../components/topHeader/topHeader";
import { products } from "../services/Api";

const SingleProduct = () => {
  //get product id from url params
  const productId = 1;
  const filteredProduct = products.filter(
    (product) => product.id === productId
  );
  const [quantity, setQuantity] = useState(1);
  const [cartItems, setCartItems] = useState(0);
  const [items, setItems] = useState([]);
  const addCartItems = () => {
    items.push(...filteredProduct);
    return setCartItems(quantity);
  };
  return (
    <>
      <TopHeader />
      <InfoHeader quantity={cartItems} items={items} />
      <Navbar />
      <Breadcrumb />
      <ProductCard
        product={filteredProduct[0]}
        quantity={quantity}
        addCartItems={addCartItems}
        setQuantity={setQuantity}
      />
      <SimilarProducts />
      <Footer />
    </>
  );
};

export default SingleProduct;
