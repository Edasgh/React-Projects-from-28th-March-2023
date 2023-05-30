import { useState, useEffect } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await client.database.listDocuments('YOUR_PRODUCTS_COLLECTION_ID');
        setProducts(response.documents);
      } catch (error) {
        console.error('Failed to fetch products', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      {products.map((product) => (
        <div key={product.$id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>{product.price}</p>
          {/* Display seller information */}
          <p>{product.seller}</p>
          {/* Add to cart button */}
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
