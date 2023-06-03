import React from "react";
import { Link } from "react-router-dom";
import "./Sell.scss";


const Sell = () => {
  return (
    <div className="sell">
      <h1>Sell</h1>
      <button className="upload_img">
        <Link to="/upload_images"> Upload Images</Link>
      </button>
      <button className="view_img">
        <Link to="/view_img"> View All Images </Link>
      </button>
      <button className="create">
        <Link to="/select_cat">Create A Product</Link>
      </button>
      <button > <Link to="/view_products" >View Your Products</Link>  </button>
    </div>
  );
};

export default Sell;
