import React from "react";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import "./Cart.scss";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, resetCart } from "../../redux/cartReducer";
import { makeRequest } from "../../makeRequest";
import {loadStripe} from '@stripe/stripe-js';
const Cart = () => {
 const products=useSelector(state=>state.cart.products)
 const dispatch=useDispatch()
    const totalPrice=()=>{
      let total=0
      products.forEach((item)=>{
        total+=item.quantity*item.price;
      })
      return total.toFixed(2)
    }
    const stripePromise = loadStripe(
      "pk_test_51MwKa2SCGR7pgSKWQyhteCHiR6MzLinV4grrvfZwqba5QbwxBNGRcxWeuTneiiZfYCAJyp2xbHtVwSDb8FwaCcst00BQQqe7HF"
    );
    const handlePayment = async () => {
      try {
        const stripe = await stripePromise;
        const res = await makeRequest.post("/orders", {
          products,
        });
        await stripe.redirectToCheckout({
          sessionId: res.data.stripeSession.id,
        });
  
      } catch (err) {
        console.log(err);
      }
    };
  return (
    <div className="cart">
      <h2>Products In Your Cart</h2>
      {products.map((item) => (
        <div className="item" key={item.id}>
          <img src={ process.env.REACT_APP_UPLOAD_URL + item.image} alt="" />
          <div className="details">
            <h3>{item.title}</h3>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">{item.quantity}X ${item.price}</div>
          </div>
          <DeleteOutlineOutlinedIcon className="deleteButton" onClick={()=>dispatch(removeItem(item.id))}  />
        </div>
      ))}

      <div className="total">
        <span>SUBTOTAL</span>
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>${totalPrice()}</span>
      </div>

      <button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
      <span className="reset" onClick={()=>dispatch(resetCart())}  >RESET CART</span>
    </div>
  );
};

export default Cart;
