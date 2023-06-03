import React, { useEffect, useState } from 'react';

function ListingDetails({ appwrite, match }) {
  const [listing, setListing] = useState(null);

  useEffect(() => {
    // Fetch listing details from Appwrite
    appwrite
      .database.getDocument('collections', 'listings', match.params.id)
      .then((response) => {
        setListing(response);
      })
      .catch((error) => {
        console.error('Error fetching listing details', error);
      });
  }, [appwrite, match.params.id]);

  if (!listing) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{listing.name}</h1>
      <p>{listing.description}</p>
      <p>Price: {listing.price}</p>
      <p>Seller: {listing.seller}</p>
    </div>
  );
}

export default ListingDetails;
