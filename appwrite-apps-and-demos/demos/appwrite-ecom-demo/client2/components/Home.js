import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to the E-commerce App</h1>
      <Link to="/listings">Browse Listings</Link>
    </div>
  );
}

export default Home;
