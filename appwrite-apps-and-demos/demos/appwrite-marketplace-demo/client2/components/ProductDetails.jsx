import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import appwrite from 'appwrite';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product details from Appwrite collection
    const sdk = new appwrite.SDK();
    sdk.setEndpoint('YOUR_APPWRITE_ENDPOINT');
    sdk.setProject('YOUR_APPWRITE_PROJECT_ID');
    sdk.setKey('YOUR_APPWRITE_API_KEY');

    sdk.database.getDocument('products', id).then(response => {
      setProduct(response);
    });
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      {/* Add more product details and interaction options */}
    </div>
  );
}

export default ProductDetails;
