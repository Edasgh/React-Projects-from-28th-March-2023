import React, { useState } from 'react';

function CreateListing({ appwrite, history }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new listing document in Appwrite
    appwrite
      .database.createDocument('collections', 'listings', {
        name,
        description,
        price,
        seller: appwrite.account.userId,
      })
      .then((response) => {
        console.log('Listing created', response);
        history.push('/listings');
      })
      .catch((error) => {
        console.error('Error creating listing', error);
      });
  };

  return (
    <div>
      <h1>Create Listing</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button type="submit">Create Listing</button>
      </form>
    </div>
  );
}

export default CreateListing;
