import React, { useState, useEffect } from "react";
import { account, databases, storage } from "../../Appwrite/appwrite_config";
import { useNavigate , useParams } from "react-router-dom";
import { ID, Permission, Role } from "appwrite";
import "./CreateProduct.scss"

const CreateProduct = () => {
  const navigate = useNavigate();
  const params = useParams();


  const [userID, setUserID] = useState();

  useEffect(() => {
    const getData = account.get();
    getData.then(
      function (response) {
        setUserID(response.$id);
      },
      function (error) {
        console.log(error);
      }
    );
  }, []);


  const [Product_name, setProduct_name] = useState("");
  const [Description, setDescription] = useState("");
  const [Price, setPrice] = useState("");
  const [Type, setType] = useState("");
  const [Size, setSize] = useState("");
  const [Img, setImg] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const promise = databases.createDocument(
      "647592808a5c92596610",
      params.id,
      ID.unique(),
      {
        Product_name,
        Description,
        Price,
        Type,
        Size,
        Img,
       
      },
      [
        Permission.write(Role.user(userID)),
        Permission.update(Role.user(userID)),
        Permission.delete(Role.user(userID)),
        Permission.read(Role.any())
      ]
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

 

  

  return (
    <div>
      <form className="createProduct" id="createProduct" onSubmit={handleSubmit}>
      <h2>Create Product</h2>
       <div className="label-input">
        <label htmlFor="img">Enter the Image URL :</label>
        <input
          type="text"
          placeholder="Enter the copied Img URL"
          name="img"
          id="img"
          value={Img}
          autoComplete="ImageURL"
          onChange={(e) => setImg(e.target.value)}
          required
        />
          </div>

          <div className="label-input">
        <label htmlFor="Product_name">Enter the Product Name :</label>
        <input
          type="text"
          placeholder="Product_name"
          name="Product_name"
          id="Product_name"
          value={Product_name}
          autoComplete="product"
          onChange={(e) => setProduct_name(e.target.value)}
          required
        />
        </div>

        <div className="label-input">
        <label htmlFor="Description">Enter the Product Description :</label>
        <textarea
          placeholder="Description"
          id="Description"
          name="Description"
          value={Description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
       </div>
        
       <div className="label-input">
        <label htmlFor="Price">Enter the Product Price :</label>
        <input
          type="number"
          placeholder="Price"
          id="Price"
          name="Price"
          value={Price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        </div>

        <div className="label-input">
        <label htmlFor="Type">Enter the Product Category :</label>
        <select
          name="Type"
          id="Type"
          value={Type}
          title="Select an Image"
          onChange={(e) => setType(e.target.value)}
          required
          >
          <option value="undefined">*Select a Type</option>
          <option value="clothing">Clothing</option>
          <option value="clothing materials">Clothing Materials</option>
          <option value="accessories">Accessories</option>
          <option value="cosmetics">Cosmetics / Grooming Products</option>
          
        </select>
        </div>
        <div className="label-input">
        <label htmlFor="Size">Enter the Product Size :</label>
         <select
          name="Size"
          id="Size"
          value={Size}
          title="Select a Size"
          onChange={(e) => setSize(e.target.value)}
          required
          >
        
              <option value="undefined">
             * Select a Size
            </option>
              <option value="M">
              M
            </option>
              <option value="S">
              S
            </option>
              <option value="L">
              L
            </option>
              <option value="XL">
              XL
            </option>
              <option value="XXL">
              XXL
            </option>
              <option value="3XL">
              3XL
            </option>
              <option value="4XL">
              4XL
            </option>
              <option value="FREE">
              FREE
            </option>
     
        </select>
        </div>

        <button type="submit">Create Product</button>
      </form>
    </div>
  );
};

export default CreateProduct;
