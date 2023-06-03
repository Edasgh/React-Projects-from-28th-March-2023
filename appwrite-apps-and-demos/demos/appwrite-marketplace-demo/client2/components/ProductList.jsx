import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import appwrite from 'appwrite';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from Appwrite collection
    const sdk = new appwrite.SDK();
    sdk.setEndpoint('YOUR_APPWRITE_ENDPOINT');
    sdk.setProject('YOUR_APPWRITE_PROJECT_ID');
    sdk.setKey('YOUR_APPWRITE_API_KEY');

    sdk.database.listDocuments('products', ['*'], [], 10, 0).then(response => {
      setProducts(response.documents);
    });
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map(product => (
          <li key={product.$id}>
            <Link to={`/product/${product.$id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
