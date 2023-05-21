import React, { useState, useEffect } from "react";
import { account, databases } from "../../Appwrite/appwrite_config";
const ProductDetails = () => {
  // const [ProductDetails, setProductDetails] = useState();

  // useEffect(() => {
    // const promise = databases.getDocument(
    //   "[DATABASE_ID]",
    //   "[COLLECTION_ID]",
    //   "[DOCUMENT_ID]"
    // );
  //   const [listings, setListings] = useState([]);
  // const [loader, setLoader] = useState(false);
  // useEffect(() => {
  //   setLoader(true);
  //   const getListings = databases.listDocuments(
  //     "64688e0c85f3f147569a",
  //     "64688e13df289f044dd5"
  //   );

  //   getListings.then(
  //     function (response) {
  //       setListings(response.documents);
  //     },
  //     function (error) {
  //       console.log(error);
  //     }
  //   );
  //   setLoader(false);
  // }, []);
  //   const promise = databases.getDocument(
  //     "[DATABASE_ID]",
  //     "[COLLECTION_ID]",
  //     match.params.id
  //   );

  //   promise.then(
  //     function (response) {
  //       setProductDetails(response); // Success
  //     },
  //     function (error) {
  //       console.log(error); // Failure
  //     }
  //   );
  // }, [match.params.id]);
  return (
    <div>
      <div>
        <img src={ProductDetails.img} alt="" />
        <h1>{ProductDetails.name}</h1>
        <p>{ProductDetails.description}</p>
        <p>Price: {ProductDetails.price}</p>
        <p>Seller: {ProductDetails.seller}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
