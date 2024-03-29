import React, { useState, useEffect } from "react";
import { databases } from "../../Appwrite/appwrite_config";
import { useParams } from "react-router-dom";
import "dotenv/config";


const ProductDetails = () => {
  const params = useParams();
  const [Name, setName] = useState("");
  const [Description, setDescription] = useState("");
  const [Price, setPrice] = useState("");
  const [Img, setImg] = useState("");
  const [Category, setCategory] = useState("");
  // const [Img_URL, setImg_URL] = useState("");

  useEffect(() => {
    const promise = databases.getDocument(
      process.env.DB_ID,
      process.env.COLL_ID,
      params.id
    );
    promise.then(
      function (response) {
        setName(response.Name);
        setDescription(response.Description);
        setPrice(response.Price);
        setImg(response.Img);
        setCategory(response.Category);
        //  setImg_URL(response.Img_URL)
      },
      function (error) {
        console.log(error);
      }
    );
  }, [params.id]);

  return (
    <div>
      <div>
        <img src={Img} alt={Name} />
        <h1>{Name}</h1>
        <p>{Description}</p>
        <p>Price: {Price}</p>
        <p>Category : {Category}</p>
        {/* <img src={Img_URL} alt={Name} /> */}
        {/* <p>Seller: {productDetails.Seller}</p> */}
      </div>
    </div>
  );
};

export default ProductDetails;
