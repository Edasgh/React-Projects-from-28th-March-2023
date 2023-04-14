import React from "react";
// import { Link } from 'react-router-dom';
import "./List.scss";
import Card from "../../Components/Card/Card";
import useFetch from "../../hooks/useFetch";
const List = ({ maxPrice, selectedSubCats, sort, catId }) => {
 const {data , loading , error }=useFetch(`/products?populate=*&[filters][categories][id][$eq]=${catId}${selectedSubCats.map(item=>`&[filters][sub_categories][id][$eq]=${item}`)}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`)
  
  return (
    <>
    <div className="list">

      {loading
        ? "loading"
        : data?.map((item) => <Card item={item} key={item.id} />)}
        </div>
    </>
  );
};

export default List;
