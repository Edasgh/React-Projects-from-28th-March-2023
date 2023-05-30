import React, { useState, useEffect } from "react";
// import { v4 as uuidv4 } from "uuid";
import { databases, storage } from "../../Appwrite/appwrite_config";
import { useNavigate } from "react-router-dom";
import { ID } from "appwrite";

const CreateProduct = () => {
  const navigate = useNavigate();
  const [Name, setName] = useState("");
  const [Description, setDescription] = useState("");
  const [Price, setPrice] = useState("");
  const [Img, setImg] = useState("");
  const [Category, setCategory] = useState("");
  const [loader, setLoader] = useState(false);
  const [options, setOptions] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const promise = databases.createDocument(
      "64688e0c85f3f147569a",
      "64688e13df289f044dd5",
      ID.unique(),
      {
        Name,
        Description,
        Price,
        Img,
        Category
      }
    );
    promise.then(
      function (response) {
        console.log(response);
        navigate("/profile");
      },
      function (error) {
        console.log(error);
      }
    );

    e.target.reset();

  };

  useEffect(() => {
    setLoader(true);
    const promise = storage.listFiles("646b2fded75059954814");

    promise.then(
      function (response) {
        // console.log(response); // Success
        setOptions(response.files);
      },
      function (error) {
        console.log(error); // Failure
      }
    );
    setLoader(false);
  }, []);

  const fileHref = (id) => {
    const result = storage.getFileView("646b2fded75059954814", id);
    return (result.href); // Resource URL
  };

  return (
    <div>
      <h1>Create Listing</h1>
      <form id="createProduct" onSubmit={handleSubmit}>
  
        <select
          name="img"
          id="img"
          value={Img}
          title="Select an Image"
          onChange={(e) => setImg(e.target.value)}
        >
          {options.map((option) => (
            <option key={option.$id} value={fileHref(option.$id)}>
              Photo id : {option.$id}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Name"
          name="Name"
          id="Name"
          value={Name}
          autoComplete="product"
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
           <input
          type="text"
          placeholder="Category"
          name="Category"
          id="Category"
          value={Category}
          autoComplete="product"
          onChange={(e) => setCategory(e.target.value)}
        />
        <button type="submit">Create Listing</button>
      </form>
    </div>
  );
};

export default CreateProduct;
