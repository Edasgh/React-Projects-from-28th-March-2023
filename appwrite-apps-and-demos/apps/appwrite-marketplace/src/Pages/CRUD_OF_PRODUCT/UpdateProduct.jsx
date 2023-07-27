import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { databases, storage } from "../../Appwrite/appwrite_config";
import "dotenv/config";


const UpdateProduct = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [Name, setName] = useState("");
  const [Description, setDescription] = useState("");
  const [Price, setPrice] = useState("");
  const [Img, setImg] = useState("");
  const [Category, setCategory] = useState("");
  const [loader, setLoader] = useState(false);
  const [options, setOptions] = useState([]);

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
      },
      function (error) {
        console.log(error);
      }
    );
  }, [params.id]);

  const updateProduct = async (e) => {
    e.preventDefault();
    const promise = databases.updateDocument(
       process.env.DB_ID,
      process.env.COLL_ID,
      params.id,
      {
        Name,
        Description,
        Price,
        Img,
      }
    );

    promise.then(
      function (response) {
        // console.log(response)// Success
        navigate(`/listings/${params.id}`);
      },
      function (error) {
        console.log(error); // Failure
      }
    );
  };
  useEffect(() => {
    setLoader(true);
    const promise = storage.listFiles(process.env.BUCKET_ID);

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
    const result = storage.getFileView(process.env.BUCKET_ID, id);
    return result.href; // Resource URL
  };
  return (
    <>
      <form id="upDateProduct" method="patch" onSubmit={updateProduct}>
        <select
          name="img"
          id="img"
          value={Img}
          title="Select an Image via photo_id"
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
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <textarea
          placeholder="Description"
          id="Description"
          name="Description"
          value={Description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></textarea>

        <input
          type="number"
          placeholder="Price"
          id="Price"
          name="Price"
          value={Price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
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
        <button>Update Product</button>
      </form>
    </>
  );
};

export default UpdateProduct;
