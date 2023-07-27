import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { storage } from "../../Appwrite/appwrite_config";
import "dotenv/config";


const ViewImg = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [file, setFile] = useState();
  

  useEffect(() => {
    const result = storage.getFileView( process.env.BUCKET_ID, params.id);
    setFile(result.href); // Resource URL
  }, [params.id]);


  const deleteImage = () => {
    const promise = storage.deleteFile( process.env.BUCKET_ID, params.id);
    promise.then(
      function (response) {
        // console.log(response); // Success
        navigate("/listings/photos")
      },
      function (error) {
        console.log(error); // Failure
      }
    );
     
  };
  return (
    <>
      <div>
        <img src={file} alt="" />
        <button onClick={deleteImage}>Delete Image</button>
      </div>
    </>
  );
};

export default ViewImg;
