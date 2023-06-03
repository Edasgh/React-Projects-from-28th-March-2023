import React, { useEffect, useState } from 'react';

function Listings({ appwrite }) {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    // Fetch listings from Appwrite
    appwrite
      .database.listDocuments('collections', 'listings')
      .then((response) => {
        setListings(response.documents);
      })
      .catch((error) => {
        console.error('Error fetching listings', error);
      });
  }, [appwrite]);

  return (
    <div>
      <h1>Listings</h1>
      {listings.map((listing) => (
        <div key={listing.$id}>
          <h2>{listing.name}</h2>
          <p>{listing.description}</p>
          <p>Price: {listing.price}</p>
          <p>Seller: {listing.seller}</p>
        </div>
      ))}
    </div>
  );
}

export default Listings;
