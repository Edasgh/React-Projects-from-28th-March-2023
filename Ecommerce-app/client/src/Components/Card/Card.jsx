import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <Link className="link" to={`/product/${item.id}`} >
      <div className="card">
        <div className="images">
          {item.attributes.isNew && <span>New Season</span>}
          <img
            src={
              process.env.REACT_APP_UPLOAD_URL +
              item.attributes?.image1?.data?.attributes?.url
            }
            alt=""
            className="mainImg"
          />

          <img
            src={
              process.env.REACT_APP_UPLOAD_URL +
              item.attributes?.image2?.data?.attributes?.url
            }
            alt=""
            className="secondImg"
          />
        </div>
        <h2>{item?.attributes?.title}</h2>
        <div className="prices">
          <h3 className="oldPrice">${item.attributes.oldPrice}</h3>
          <h3 className="price">${item.attributes.price}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
