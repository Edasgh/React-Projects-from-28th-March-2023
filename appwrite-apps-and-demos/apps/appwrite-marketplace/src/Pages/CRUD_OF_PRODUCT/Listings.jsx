import React, { useState, useEffect } from "react";
import { databases } from "../../Appwrite/appwrite_config";
import "dotenv/config";


const Listings = () => {
  const [listings, setListings] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    const getListings = databases.listDocuments(
      process.env.DB_ID,
      process.env.COLL_ID
    );

    getListings.then(
      function (response) {
        setListings(response.documents);
      },
      function (error) {
        console.log(error);
      }
    );
    setLoader(false);
  }, []);

  const deleteProduct = (id) => {
    const promise = databases.deleteDocument(
      process.env.DB_ID,
      process.env.COLL_ID,
      id
    );
    promise.then(
      function (response) {
        console.log(response);
      },
      function (error) {
        console.log(error);
      }
    );
    window.location.reload();
  };

  return (
    <div>
      {loader ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1>Listings</h1>
          {listings.map((listing) => (
            <div key={listing.$id}>
              <img src={listing.Img} alt={listing.Name} />
              <a href={`/listings/${listing.$id}`}>
                <h2>{listing.Name}</h2>
              </a>
              <p>{listing.Description}</p>
              <p>Price: {listing.Price}</p>
              <p>Category : {listing.Category}</p>
              <button
                onClick={() => {
                  deleteProduct(listing.$id);
                }}
              >
                Delete Product
              </button>
              <button>
                <a href={`/listings/update/${listing.$id}`}> Update Product</a>
              </button>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Listings;
