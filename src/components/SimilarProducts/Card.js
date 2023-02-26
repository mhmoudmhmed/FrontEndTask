import React from "react";

const Card = ({ card, index }) => {
  return (
    <div key={index} className="card">
      <div className="rotate_img">
        <img alt="rotate img" src={"./images/rotate.svg"} className="img" />
      </div>
      <img alt="product img" src={card.img} className="card_img" />
      <p className="desc">{card.desc}</p>
      <div className="product_info">
        <div className="price_info">
          <p className="price">
            {card.price} <span>{card.currency}</span>
          </p>
          <div className={`${card.old_price ? "sale" : "hidden"}`}>
            <p className="old_price">
              {card.old_price} {card.old_price && <span>{card.currency}</span>}
            </p>
            {<div className={`${card.sale && "offer"}`}>{card.sale}</div>}
          </div>
        </div>
        <img alt="brand" src={card.brand} className="brand" />
      </div>
      <div className="rating_wrapper">
        <div className="rating">
          {[...new Array(card.total_rating)].map((arr, index) => {
            return index < Math.floor(card.rating) ? (
              <img alt="star" src={"./images/star.svg"} className="star" key={index} />
            ) : (
              <img
                alt="empty star"
                src={"./images/empty_star.svg"}
                className="empty_star"
                key={index}
              />
            );
          })}
        </div>
        <p className="rating_number">
          {card.rating} of {card.total_rating}
        </p>
      </div>
      <div className="provider">
        {card.provider ? (
          <p className="provider_name">
            Pickup From: <span>{card.provider}</span>
          </p>
        ) : (
          <div className="provider_info">
            <p>
              From: <span>{card.from}</span>
            </p>
            <p>
              To: <span>{card.to}</span>
            </p>
            <p>
              In: <span>{card.in}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
