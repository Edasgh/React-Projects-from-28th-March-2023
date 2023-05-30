import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { storage } from "../../Appwrite/appwrite_config";
const ViewImg = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [file, setFile] = useState();
  

  useEffect(() => {
    const result = storage.getFileView("646b2fded75059954814", params.id);
    setFile(result.href); // Resource URL
  }, [params.id]);


  const deleteImage = () => {
    const promise = storage.deleteFile("646b2fded75059954814", params.id);
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
