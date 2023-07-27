import React, { useState, useEffect } from "react";
import { databases } from "../../Appwrite/appwrite_config";
import { useParams } from "react-router-dom";
import "./Product.scss"
import "dotenv/config";
const Product = () => {
  const params = useParams();
  const [Product_name, setProduct_name] = useState("");
  const [Description, setDescription] = useState("");
  const [Price, setPrice] = useState("");
  const [Img, setImg] = useState("");
  const [Type, setType] = useState("");
  const [Size , setSize] = useState("")
 

  useEffect(() => {
    const promise = databases.getDocument(
     process.env.PRODUCTDB_ID,
    params.coll_id,
      params.id
    );
    promise.then(
      function (response) {
        setProduct_name(response.Product_name);
        setDescription(response.Description);
        setPrice(response.Price);
        setImg(response.Img);
        setType(response.Type);
        setSize(response.Size);
    
      },
      function (error) {
        console.log(error);
      }
    );
  }, [params.coll_id , params.id ]);

  return (
    <div>
      <div className="product-card">
        <img src={Img} alt={Product_name} />
        <h1>{Product_name}</h1>
        <p className="desc">{Description}</p>
        <p className="price">Price: {Price}</p>
        <p className="type">Category : {Type}</p>
        <p className="size">Size : {Size}</p>
      
      </div>
    </div>
  );
};

export default Product;
