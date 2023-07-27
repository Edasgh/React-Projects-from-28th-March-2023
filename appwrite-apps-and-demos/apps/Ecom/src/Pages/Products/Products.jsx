import React, { useState, useEffect } from "react";
import { databases , account } from "../../Appwrite/appwrite_config";
import { useParams } from "react-router-dom";
import "./Products.scss";
import { useFetchProducts } from "../../hooks/useFetchproducts";
import { getSession } from "../../hooks/getSession";
import "dotenv/config";
const Products = () => {
  const params = useParams();
  const { products, loader } = useFetchProducts(params.coll_id);
  const [creatorSession , setCreatorSession] = useState(false);
  const { userID } = getSession();
  // const [userID, setUserID] = useState();
  
  useEffect(() => {
    // const getData = account.get();
    // getData.then(
    //   function (response) {
    //     setUserID(response.$id);
    //       },
    //       function (error) {
    //           console.log(error);
    //       }
    //       );

 

          products.forEach((product) => {
            if(product.$permissions[0] === `update("user:${userID}")`){
              setCreatorSession(true)
              console.log(userID)
            }else{
              setCreatorSession(false)
            }
             
            
          });

      }, []);

//   useEffect(()=>{
//   products.forEach((product) => {
//     if(product.$permissions[0] === `update("user:${userID}")`){
//       setCreatorSession(true)
//     }else{
//       setCreatorSession(false)
//     }
     
    
//   });
// },[])

  const deleteProduct = (id) => {
    const promise = databases.deleteDocument(
     process.env.PRODUCTDB_ID,
      params.coll_id,
      id
    );
    promise.then(
      function (response) {
        console.log(response);
      },
      function (error) {
        console.log(error);
      }
    );
    window.location.reload();
  };

  return (
    <div className="AllProducts">
      {loader ? (
        <p className="loader">Loading...</p>
      ) : (
        <>
          {products.map((product) => (
            <div className="Product" key={product.$id}>
              <img src={product.Img} alt={product.Product_name} />
              <a className="name" href={`/products/${product.$id}`}>
                <h2>{product.Product_name}</h2>
              </a>
              <p className="price">Price: {product.Price}</p>
              <p className="type">Category : {product.Type}</p>
              <p className="size">Size : {product.Size}</p>
              {!creatorSession ? (
                <>
                  <button>Add to Cart</button>
                  <button>Add to Wishlist</button>
                </>
              ) : (
                <>
                  <button
                    className="delBtn"
                    onClick={() => {
                      deleteProduct(product.$id);
                    }}
                  >
                    Delete Product
                  </button>
                  <button className="updateBtn">
                    <a
                      href={`/products/update/${params.coll_id}/${product.$id}`}
                    >
                      Update Product
                    </a>
                  </button>
                </>
              )}
              {/* <button  className="delBtn"
                onClick={() => {
                  deleteProduct(product.$id);
                }}
              >
                Delete Product
              </button>
              <button className="updateBtn">
                <a href={`/products/update/${ params.coll_id}/${product.$id}`}> Update Product</a>
              </button> */}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Products;
