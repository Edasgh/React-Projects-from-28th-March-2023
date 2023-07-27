import React, { useEffect, useState } from "react";
import { storage } from "../../Appwrite/appwrite_config";
import "dotenv/config";

const AllImages = () => {
  const [images, setImages] = useState([]);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setLoader(true);
    const promise = storage.listFiles(process.env.BUCKET_ID);

    promise.then(
      function (response) {
        // console.log(response); // Success
        setImages(response.files);
      },
      function (error) {
        console.log(error); // Failure
      }
    );
    setLoader(false);
  }, []);
  return (
    <>
      {loader ? (
        <p>Loading....</p>
      ) : (
        <>
          {images.map((img) => (
            <div key={img.$id}>
                <a href={`/view/photo/${img.$id}`}>View Photo  ||  id : {img.$id}</a>
             </div>
          ))}
        </>
      )}
    </>
  );
};

export default AllImages;
