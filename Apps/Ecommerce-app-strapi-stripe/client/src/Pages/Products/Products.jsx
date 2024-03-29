import React, { useState } from "react";
import "./Products.scss";
import List from "../../Components/List/List";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
const Products = () => {
  const params = useParams();
  // Get ID from URL
  const catId = parseInt(params.id);
  const [maxPrice, setMaxPrice] = useState(500);
  const [sort, setSort] = useState("asc");
  const [selectedSubCats, setSelectedSubCats] = useState([]);

  const { data, loading, error } = useFetch(
    `/sub-categories?[filter][category][id][$eq]=${catId}`
  );
  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
    
  };
  
  return (
    <>
      <div className="products">
        <div className="left">
          <div className="filterItem">
            <h2>Products Category</h2>
            {data?.map((item) => (
              <div className="inputItem" key={item.id}>
                <input
                  type="checkbox"
                  name={item.id}
                  id={item.id}
                  value={item.id}
                  onChange={handleChange}
                />
                <label htmlFor={item.id}>{item.attributes.title}</label>
              </div>
            ))}
          </div>
          <div className="filterItem">
            <h2>Filter by Price</h2>
            <div className="inputItem">
              <span>0</span>
              <input
                type="range"
                min={0}
                max={6000}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
              <span>{maxPrice}</span>
            </div>
          </div>
          <div className="filterItem">
            <h2>Sort by</h2>
            <div className="inputItem">
              <input
                type="radio"
                name="price"
                id="asc"
                onChange={(e) => setSort("asc")}
              />
              <label htmlFor="asc">Price (Lowest first)</label>
            </div>
            <div className="inputItem">
              <input
                type="radio"
                name="price"
                id="desc"
                onChange={(e) => setSort("desc")}
              />
              <label htmlFor="desc">Price (Highest first)</label>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="top">
            <img
              src="https://images.pexels.com/photos/7679471/pexels-photo-7679471.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="topImg"
              className="cartImg"
            />
          </div>
          <div className="bottom">
            <List catId={catId} maxPrice={maxPrice} sort={sort} selectedSubCats={selectedSubCats} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
