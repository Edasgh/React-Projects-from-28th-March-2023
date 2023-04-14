import React from "react";
import "./FP.scss";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";

const FP = ({ type }) => {
 const {data , loading , error }=useFetch(`/products?populate=*&[filters][type][$eq]=${type}`)

  return (
    <>
      <div className="featuredProducts">
        <div className="top">
          <h1>{type} Products</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque vitae
            debitis sit veniam culpa, temporibus maiores rerum consequuntur
            voluptates unde ab nobis deleniti quas eaque libero quis aliquid
            impedit pariatur praesentium. Nam, est iure ipsam eum labore
            veritatis omnis id.
          </p>
        </div>
        <div className="bottom">
          {error ? <h1>Something Went Wrong</h1> 
          : loading 
          ? <h2>Loading</h2>
          :
           data?.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default FP;
