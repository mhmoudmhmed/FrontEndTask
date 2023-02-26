import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
import img4 from "../images/img4.png";
import black from "../images/black.png";
import red from "../images/red.png";
import slider1 from "../images/slider1.png";
import slider2 from "../images/slider2.png";
import slider3 from "../images/slider3.png";
import slider4 from "../images/slider4.png";
import brand from "../images/addidas.svg";

export const products = [
  {
    id: 1,
    img: slider1,
    desc: "Adidas black t-shirt lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    price: 9.999,
    old_price: 9999,
    currency: "LE",
    sale: "50%",
    brand: brand,
    rating: 4.2,
    total_rating: 5,
    provider: "cenena mall",
    from: null,
    to: null,
    in: null,
    gender: "men",
    rates: 22,
    colors: [
      {
        color: black,
      },
      {
        color: red,
      },
    ],
    sizes: [
      {
        size: "small",
      },
      {
        size: "medium",
      },
      {
        size: "large",
      },
      {
        size: "x large",
      },
      {
        size: "xx large",
      },
    ],
    product_images: [slider1, slider2, slider3, slider4],
  },
  {
    id: 2,
    img: img1,
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    price: 9.999,
    old_price: 9999,
    currency: "LE",
    sale: "50%",
    brand: brand,
    rating: 4.2,
    total_rating: 5,
    provider: "cenena mall",
    from: null,
    gender: "women",
    to: null,
    in: null,
    rates: null,
    colors: [
      {
        color: black,
      },
      {
        color: red,
      },
    ],
    sizes: [
      {
        size: "small",
      },
      {
        size: "medium",
      },
      {
        size: "large",
      },
      {
        size: "x large",
      },
      {
        size: "xx large",
      },
    ],
  },
  {
    id: 3,
    img: img2,
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    price: 9999,
    old_price: null,
    currency: "LE",
    sale: null,
    brand: brand,
    rating: 3,
    total_rating: 5,
    provider: null,
    from: "UK",
    to: "Egypt",
    in: "10",
    gender: "women",
    rates: null,
    colors: [
      {
        color: black,
      },
      {
        color: red,
      },
    ],
    sizes: [
      {
        size: "small",
      },
      {
        size: "medium",
      },
      {
        size: "large",
      },
      {
        size: "x large",
      },
      {
        size: "xx large",
      },
    ],
  },
  {
    id: 4,
    img: img3,
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    price: 9999,
    old_price: 9999,
    currency: "LE",
    sale: "30%",
    brand: brand,
    rating: 4.5,
    total_rating: 5,
    provider: "cenena mall",
    from: null,
    to: null,
    in: null,
    gender: "men",
    rates: null,
    colors: [
      {
        color: black,
      },
      {
        color: red,
      },
    ],
    sizes: [
      {
        size: "small",
      },
      {
        size: "medium",
      },
      {
        size: "large",
      },
      {
        size: "x large",
      },
      {
        size: "xx large",
      },
    ],
  },
  {
    id: 5,
    img: img4,
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    price: 9999,
    old_price: 9999,
    currency: "LE",
    sale: "70%",
    brand: brand,
    rating: 4,
    total_rating: 5,
    provider: null,
    from: "Egypt",
    to: "Egypt",
    in: "2 Days",
    gender: "women",
    rates: null,
    colors: [
      {
        color: black,
      },
      {
        color: red,
      },
    ],
    sizes: [
      {
        size: "small",
      },
      {
        size: "medium",
      },
      {
        size: "large",
      },
      {
        size: "x large",
      },
      {
        size: "xx large",
      },
    ],
  },
];
