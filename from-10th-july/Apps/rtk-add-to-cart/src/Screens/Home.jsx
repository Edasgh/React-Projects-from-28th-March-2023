import React, { useEffect } from "react";
import Card from "../Components/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/slice(s)/productSlice";
import { STATUSES } from "../redux/slice(s)/productSlice";
import { addToCart, removeFromCart } from "../redux/slice(s)/cartSlice";
// import { shoppingItems } from "../data";

const Home = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);
  // const products = shoppingItems;

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (status === STATUSES.LOADING) {
    return <h2>Loading....</h2>;
  }

  if (status === STATUSES.ERROR) {
    return <h2>Something went wrong!</h2>;
  }

  return (
    <>
      <h1 className="productsH">All Products</h1>
      <main className="products">
        {products.map((product) => (
          <Card
          key={product.id}
            product={product}
            dispatch={dispatch}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            Btndisplay={"initial"}
          />
        ))}
      </main>
    </>
  );
};

export default Home;
