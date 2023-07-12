import React, { useState } from "react";
import "../App.css";


const Card = ({ product, dispatch, addToCart, removeFromCart ,Btndisplay }) => {

  // const [noOfItem , setNoOfItem] = useState(1)

  // function countIncrease(noOfItem){
  //  setNoOfItem(noOfItem+1)
  // }
  // function countDecrease(noOfItem){
  //   if(noOfItem>1){
  //     setNoOfItem(noOfItem-1)

  //   }
  // }

  const [disable, setDisable] = useState(false);

 

  return (
    <>
      <div className="card">
        <div className="image">
          <img src={product.image} className="itemImg" alt={product.name} />
        </div>
        <p className="title">{product.title}</p>
        <p className="category">
          Category : <span className="itemCategory">{product.category}</span>
        </p>
        <p className="description">{[...product.description].slice(0, 100)}</p>
        <p className="price">
          Price : <span className="itemPrice">{product.price}</span>
        </p>
        <p className="rating">
          Rating :
          <span className="itemRating">
            {product.rating.rate}({product.rating.count})
          </span>
        </p>
        <div className="buttons1">
          <button
            className="addToCart"
            disabled={disable}
            style={{display:Btndisplay}}
            onClick={() => {
              dispatch(addToCart(product));
              setDisable(true);

            }}
          >
            Add to Cart (+)
          </button>
          &nbsp;
          <button
            className="removeFromCart"
            onClick={() => {
              dispatch(removeFromCart(product.id));
            }}
          >
            Remove From Cart (-)
          </button>
        </div>
        {/* <div className="buttons2">
          <button
            className="addItemNo"
            title="Increase Item No"
            onClick={() => {
            countIncrease(noOfItem)
            }}
          >
            +
          </button>
          <span className="noOfItem">{noOfItem}</span>
          <button
            className="removeItemNo"
            title="Decrease Item No"
            onClick={() => {
              countDecrease(noOfItem)
            }}
          >
            -
          </button>
        </div> */}
        </div>
    </>
  );
};

export default Card;
