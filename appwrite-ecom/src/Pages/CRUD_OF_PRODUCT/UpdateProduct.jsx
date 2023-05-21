import React from "react";

const UpdateProduct = () => {
  const promise = databases.updateDocument(
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
  );
};

export default UpdateProduct;
