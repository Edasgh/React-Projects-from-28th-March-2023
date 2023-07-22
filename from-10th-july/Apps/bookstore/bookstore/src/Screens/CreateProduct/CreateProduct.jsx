import React from "react";

const CreateProduct = () => {
  return (
    <form className="container mt-3">
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
         Enter Book Title : 
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Book Title"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput2" className="form-label">
         Enter Book Price : 
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput2"
          placeholder="Book Price"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput3" className="form-label">
         Enter Book Author Name : 
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput3"
          placeholder="Author Name"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
        Enter Book Description : 
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          required
        ></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput4" className="form-label">
         Enter Related Tags : 
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput4"
          placeholder="Tags : Spring , London etc."
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">Create Product</button>
    </form>
  );
};

export default CreateProduct;
