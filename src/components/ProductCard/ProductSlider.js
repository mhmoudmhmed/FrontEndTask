import React, { useRef, useState } from "react";

const ProductSlider = ({ product }) => {
  const [img, setImg] = useState(product.product_images[0]);
  let [imgIndex, setImgIndex] = useState(0);
  const length = product.product_images.length;
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

  const onNext = () => {
    setImgIndex(imgIndex === length - 1 ? 0 : imgIndex + 1);
    if (imgIndex) {
      setImg(product.product_images[imgIndex]);
    }
  };

  const onPrev = () => {
    setImgIndex(imgIndex === 0 ? length - 1 : imgIndex - 1);
    if (imgIndex) {
      setImg(product.product_images[imgIndex]);
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
            <div className="swipe_left" onClick={() => onPrev()}>
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
            <div
              className="swipe_right"
              onClick={() => {
                onNext();
              }}
            >
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
