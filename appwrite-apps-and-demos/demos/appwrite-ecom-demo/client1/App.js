// Import required dependencies
import React, { useState, useEffect } from 'react';
import { Appwrite } from 'appwrite';
import './App.css';

// Initialize Appwrite client
const appwrite = new Appwrite();

// Configure Appwrite endpoint and project credentials
appwrite
  .setEndpoint('https://YOUR_APPWRITE_ENDPOINT/v1') // Replace with your Appwrite endpoint
  .setProject('YOUR_APPWRITE_PROJECT_ID'); // Replace with your Appwrite project ID

function App() {
  const [user, setUser] = useState(null);
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    // Check if user is logged in
    appwrite.account.get().then((response) => {
      setUser(response);
    }).catch((error) => {
      console.error(error);
    });

    // Load listings
    loadListings();
  }, []);

  const loadListings = () => {
    setLoading(true);

    // Fetch listings from Appwrite data collection
    appwrite.database.listDocuments('listings', ['*'], ['*'], 10, 0, 'createdAt', 'DESC')
      .then((response) => {
        setListings(response.documents);
        setLoading(false);
      }).catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  const handleLogin = () => {
    // Redirect to Appwrite login endpoint
    window.location.href = appwrite.account.getOAuth2AuthorizationURL('google'); // Replace with your desired authentication method
  };

  const handleLogout = () => {
    // Logout user
    appwrite.account.deleteSession('current').then(() => {
      setUser(null);
    }).catch((error) => {
      console.error(error);
    });
  };

  const handlePostListing = () => {
    // Create a new listing
    const data = {
      title,
      description,
      price: parseFloat(price),
      createdAt: Math.floor(Date.now() / 1000),
    };

    appwrite.database.createDocument('listings', data)
      .then(() => {
        setTitle('');
        setDescription('');
        setPrice('');
        loadListings();
      }).catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>My E-commerce App</h1>
        {user ? (
          <div>
            <p>Welcome, {user.name}!</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <button onClick={handleLogin}>Login with Google</button>
        )}
      </header>
      <main>
        <h2>Post a Listing</h2>
        {user && (
          <div>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <input
              type="number"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <button onClick={handlePostListing}>Post Listing</button>
          </div>
        )}
        <h2>Listings</h2>
        {loading ? (
          <p>Loading listings...</p>
        ) : (
          <ul>
            {listings.map((listing) => (
              <li key={listing.$id}>
                <h3>{listing.title}</h3>
                <p>{listing.description}</p>
                <p>Price: ${listing.price}</p>
                <button>Contact Seller</button>
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}

export default App;
