import React from "react";

const DeleteProduct = () => {
  const promise = databases.deleteDocument(
    "[DATABASE_ID]",
    "[COLLECTION_ID]",
    "[DOCUMENT_ID]"
  );

  promise.then(
    function (response) {
      console.log(response); // Success
    },
    function (error) {
      console.log(error); // Failure
    }
  );
  return(
<>
</>
  ) 
};

export default DeleteProduct;
