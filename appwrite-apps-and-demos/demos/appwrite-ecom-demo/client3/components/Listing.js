import React, { useEffect, useState } from 'react';
import { Appwrite } from 'appwrite';

const client = new Appwrite();

function Listing() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    client
      .setEndpoint('YOUR_APPWRITE_ENDPOINT') // Replace with your Appwrite endpoint
      .setProject('YOUR_APPWRITE_PROJECT_ID') // Replace with your Appwrite project ID
      .setKey('YOUR_APPWRITE_API_KEY'); // Replace with your Appwrite API key

    client.database
      .listDocuments('YOUR_COLLECTION_ID') // Replace with your Appwrite collection ID
      .then((response) => setItems(response.documents))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h2>Listing Items</h2>
      {items.map((item) => (
        <div key={item.$id}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <p>Price: {item.price}</p>
          <p>Contact: {item.seller}</p>
        </div>
      ))}
    </div>
  );
}

export default Listing;
