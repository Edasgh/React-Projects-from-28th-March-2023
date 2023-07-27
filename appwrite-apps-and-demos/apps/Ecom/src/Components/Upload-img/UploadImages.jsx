import React from "react";
import { storage } from "../../Appwrite/appwrite_config";
import { ID } from "appwrite";
import { useNavigate } from "react-router-dom";
import "./UploadImages.scss"
import "dotenv/config";


const UploadImages = () => {


  const navigate = useNavigate();

  const uploadImage = (e) => {
    e.preventDefault();
    const promise = storage.createFile(
      process.env.BUCKET_ID,
      ID.unique(), //file_id
      document.getElementById("img").files[0]
    );

    promise.then(
      function (response) {
        // console.log(response); // Success
        navigate("/view_img")
      },
      function (error) {
        console.log(error); // Failure
      }
    );
  };
  return (
    <div className="uploadImg">
      <input type="file" name="img" id="img" />
      <button onClick={uploadImage} >Upload Image</button>
    </div>
  );
};

export default UploadImages;
