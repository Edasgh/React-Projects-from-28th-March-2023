import React from "react";
import "./FP.scss";
import Card from "../Card/Card";

const FP = ({ type }) => {
  const data = [
    {
      id: 1,
      image1:
        "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinyrgb&w=1600",
      image2:
        "https://images.pexels.com/photos/15336614/pexels-photo-15336614.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "SportsWear",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      image1:
        "https://images.pexels.com/photos/1750776/pexels-photo-1750776.jpeg?auto=compress&cs=tinysrgb&w=1600",
        image2:"https://images.pexels.com/photos/3951783/pexels-photo-3951783.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Coat",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 3,
      image1:"https://images.pexels.com/photos/2888211/pexels-photo-2888211.jpeg?auto=compress&cs=tinysrgb&w=1600",
      image2:
        "https://images.pexels.com/photos/8180732/pexels-photo-8180732.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Skirt",
      oldPrice: 19,
      price: 12,
    },
    {
      id: 4,
      image1:
        "https://images.pexels.com/photos/458649/pexels-photo-458649.jpeg?auto=compress&cs=tinysrgb&w=1600",
      image2:"https://images.pexels.com/photos/984619/pexels-photo-984619.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Hat",
      oldPrice: 19,
      price: 12,
    },
  ];
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
            {data.map(item=>(
                <Card item={item} key={item.id}/>

            ))}
        </div>
      </div>
    </>
  );
};

export default FP;
