import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { databases } from "../../Appwrite/appwrite_config";
import { useNavigate } from "react-router-dom";
import { ID } from "appwrite";
const CreateProduct = () => {
  const navigate=useNavigate()
  const [Name, setName] = useState('');
  const [Description, setDescription] = useState('');
  const [Price, setPrice] = useState('');
  const [Img, setImg] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    // const promise = databases.createDocument( DATABASE_ID , COLLECTION_ID , DOCUMENT_ID , DATA)
    const promise = databases.createDocument(
      "64688e0c85f3f147569a",
      "64688e13df289f044dd5",
      ID.unique(),
      {
        Name,
        Description,
        Price,
        Img
      }
    );
    promise.then(
      function (response) {
        console.log(response);
        navigate("/profile")
      },
      function (error) {
        console.log(error);
      }
    );

    e.target.reset();
    // window.location.reload();
  };
  



  return (
    <div>
      <h1>Create Listing</h1>
      <form id="createProduct" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Image"
          name="img"
          id="img"
          value={Img}
          onChange={(e) => setImg(e.target.value)}
        />
        <input
          type="text"
          placeholder="Name"
          name="Name"
          id="Name"
          value={Name}
          autoComplete="ert"
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="Description"
          id="Description"
          name="Description"
          value={Description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <input
          type="number"
          placeholder="Price"
          id="Price"
          name="Price"
          value={Price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button type="submit">Create Listing</button>
      </form>
    </div>
  );
}

export default CreateProduct;
