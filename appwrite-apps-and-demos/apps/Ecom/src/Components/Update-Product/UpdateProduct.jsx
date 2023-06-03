import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { databases, storage } from "../../Appwrite/appwrite_config";
import "./UpdateProduct.scss"
const UpdateProduct = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [Product_name, setProduct_name] = useState("");
  const [Description, setDescription] = useState("");
  const [Price, setPrice] = useState("");
  const [Type, setType] = useState("");
  const [Size, setSize] = useState("");
  const [Img, setImg] = useState("");
  const [loader, setLoader] = useState(false);


  useEffect(() => {
    setLoader(true)
    const promise = databases.getDocument(
      "647592808a5c92596610",
      params.coll_id,
      params.id
    );
    promise.then(
      function (response) {
        setProduct_name(response.Product_name);
        setDescription(response.Description);
        setPrice(response.Price);
        setType(response.Type)
        setSize(response.Size)
        setImg(response.Img);
       
      },
      function (error) {
        console.log(error);
      }
    );
    setLoader(false)
  }, [params.id]);

  const updateProduct = async (e) => {
    e.preventDefault();
    const promise = databases.updateDocument(
      "647592808a5c92596610",
      params.coll_id,
      params.id,
      {
        Product_name,
        Description,
        Price,
        Type,
        Size,
        Img,
      }
    );

    promise.then(
      function (response) {
        // console.log(response)// Success
        navigate(`/products/${params.coll_id}/${params.id}`);
      },
      function (error) {
        console.log(error); // Failure
      }
    );
  };

 
  return (
    <div>
      {loader ? <> <h1> Loading.....</h1>  </>  :<>
      <form className="updateProduct" id="updateProduct" onSubmit={updateProduct}>
      <h2>Update the Product</h2>
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
          title="Select an Category"
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

        <button type="submit">Update Product</button>
      </form>
      </>}
     
    </div>
  );
};

export default UpdateProduct;
