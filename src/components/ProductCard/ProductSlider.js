import React, { useRef, useState } from "react";

const ProductSlider = ({ product }) => {
  const [img, setImg] = useState(product.product_images[0]);
  const refs = useRef([]);
  const hoverHandler = (image, i) => {
    setImg(image);
    refs.current[i].classList.add("active");
    for (let j = 0; j < product.product_images.length; j++) {
      if (i !== j) {
        refs.current[j].classList.remove("active");
      }
    }
  };

  refs.current = [];
  const addRefs = (el) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  };
  return (
    <div className="product_slider">
      <div className="slider_container">
        <div className="slider">
          <div className="top_slider">
            <div className="rotate_img">
              <img
                alt="rotate img"
                src={"./images/rotate.svg"}
                className="img"
              />
            </div>
            <div className="top_image">
              <img src={img} alt="carousel" />
            </div>
          </div>
          <div className="bottom_slider">
            <div className="swipe_left">
              <img src="./images/swipe.svg" alt="swipe" />
            </div>
            {product.product_images.map((image, index) => (
              <div
                className="img_wrap"
                key={index}
                onMouseOver={() => {
                  hoverHandler(image, index);
                }}
                ref={addRefs}
              >
                <img src={image} alt="" />
              </div>
            ))}
            <div className="swipe_right">
              <img src="./images/swipe.svg" alt="swipe" />
            </div>
          </div>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
};

export default ProductSlider;
