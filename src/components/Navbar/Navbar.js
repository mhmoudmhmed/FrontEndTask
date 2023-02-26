import React, { useState } from "react";
import "./Navbar.scss";

const lists = [
  {
    list: "men",
  },
  {
    list: "women",
  },
  {
    list: "unisex",
  },
  {
    list: "kids",
  },
  {
    list: "best sellers",
  },
  {
    list: "new arrivals",
  },
  {
    list: "offers",
  },
];

const Navbar = () => {
  const [active, setActive] = useState(6);
  return (
    <div className="container">
      <div className="row">
        {lists.map((list, index) => {
          return (
            <div key={index} onClick={() => setActive(index)}>
              <p className={`list ${active === index && "active"}`}>{list.list}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
