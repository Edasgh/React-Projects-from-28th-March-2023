import React, { useState } from "react";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import BalanceOutlinedIcon from "@mui/icons-material/BalanceOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./Product.scss";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";

const Product = () => {
  const id=useParams().id;
  const dispatch=useDispatch()
  const [selectedImg, setSelectedImg] = useState("image1");
  const [quantity, setQuantity] = useState(1);
  
const {data , loading , error}=useFetch(`products/${id}?populate=*`)
  return (
    <>
      <div className="product">
        <div className="left">
          <div className="images">
            <img src={ process.env.REACT_APP_UPLOAD_URL +
              data?.attributes?.image1?.data?.attributes?.url} alt="" onClick={(e) => setSelectedImg("image1")} />
            <img src={ process.env.REACT_APP_UPLOAD_URL +
              data?.attributes?.image2?.data?.attributes?.url} alt="" onClick={(e) => setSelectedImg("image2")} />
          </div>
          <div className="mainImg">
            <img src={ process.env.REACT_APP_UPLOAD_URL +
              data?.attributes?.[selectedImg]?.data?.attributes?.url} alt="" />
          </div>
        </div>
        <div className="right">
          <h1 className="title">{data?.attributes?.title}</h1>
          <div className="prices">
            <h2 className="oldPrice">${data?.attributes?.oldPrice}</h2>
            <h2 className="price">${data?.attributes?.price}</h2>
          </div>
          <p className="description">
          {data?.attributes?.description}
          </p>
          <div className="quantity">
            <button
              className="minus"
              onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              className="plus"
              onClick={() => setQuantity((prev) => prev + 1)}
            >
              +
            </button>
            {/* prev is the element or parameter of the setQuantity here */}
          </div>
          <button className="add" onClick={()=>dispatch(addToCart({
            id:data.id,
            title:data.attributes.title,
            description:data.attributes.description,
            price:data.attributes.price,
            quantity,
            image:data.attributes.image1.data.attributes.url,
          }))}>
            <AddShoppingCartOutlinedIcon /> ADD TO CART
          </button>
          <div className="two-buttons">
            <span className="wishlist">
              <FavoriteBorderOutlinedIcon className="outlinedHeart" />
              <FavoriteIcon className="filledHeart" />
              ADD TO WISHLIST
            </span>
            <span className="compare">
              <span className="balanceIcon">
                <BalanceOutlinedIcon />
              </span>
              ADD TO COMPARE
            </span>
          </div>
          <div className="info">
            <span>Vendor : CHANEL</span>
            <span>Product Type : Sling Bag</span>
            <span>Tag : Sling Bag , Women , Purse</span>
          </div>
          <hr />
          <div className="details">
            <span>DESCRIPTION</span>
            <hr />
            <span>ADDITIONAL INFORMATION</span>
            <hr />
            <span>FAQ</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
