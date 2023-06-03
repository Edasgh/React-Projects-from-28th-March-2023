import React, { useState } from 'react';
import { Appwrite } from 'appwrite';

const client = new Appwrite();

function PostItem() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    client
      .setEndpoint('YOUR_APPWRITE_ENDPOINT') // Replace with your Appwrite endpoint
      .setProject('YOUR_APPWRITE_PROJECT_ID') // Replace with your Appwrite project ID
      .setKey('YOUR_APPWRITE_API_KEY'); // Replace with your Appwrite API key

    client.database
      .createDocument('YOUR_COLLECTION_ID', {
        name,
        description,
        price,
        seller: 'CURRENT_USER_ID', // Replace with the current user ID
      })
      .then(() => {
        alert('Item posted successfully');
        setName('');
        setDescription('');
        setPrice('');
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h2>Post Item</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Item name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="Item description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button type="submit">Post</button>
      </form>
    </div>
  );
}

export default PostItem;
