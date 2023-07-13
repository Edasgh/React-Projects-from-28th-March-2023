import React from "react";
import Card from "../Components/Card";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/slice(s)/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);

  return (
    <>
      <h1 className="cartH">Cart</h1>
      <section id="Cart">
        {products.map(product=>(
          <Card
          key={product.id}
          product={product}
          dispatch={dispatch}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          Btndisplay={"none"}
          />
        ))}
       
      </section>
    </>
  );
};

export default Cart;
