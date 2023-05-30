import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from "./Pages/user_auth/LogIn";
import SignUp from "./Pages/user_auth/SignUp";
import Profile from "./Pages/user_auth/Profile";
import Home from "./Pages/Home";
import ProductDetails from "./Pages/CRUD_OF_PRODUCT/ProductDetails";
import CreateProduct from "./Pages/CRUD_OF_PRODUCT/CreateProduct";
import Listings from "./Pages/CRUD_OF_PRODUCT/Listings";
import UpdateProduct from "./Pages/CRUD_OF_PRODUCT/UpdateProduct";
import UploadImages from "./Pages/CRUD_OF_PRODUCT/UploadImages";
import AllImages from "./Pages/CRUD_OF_PRODUCT/Allimages";
import ViewImg from "./Pages/CRUD_OF_PRODUCT/ViewImg";
import Navbar from "./Components/Navbar/Navbar"
const App = () => {
  return (
    <div>
      <BrowserRouter>
          <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<LogIn />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/listings" element={<Listings />} />
          <Route exact path="/listings/create" element={<CreateProduct />} />
          <Route
            exact
            path="/listings/upload_photo"
            element={<UploadImages />}
          />
          <Route exact path="/listings/photos" element={<AllImages />} />
          <Route exact path="/view/photo/:id" element={<ViewImg />} />
          <Route
            exact
            path="/listings/update/:id"
            element={<UpdateProduct />}
          />
          <Route exact path="/listings/:id" element={<ProductDetails />} />
          {/* 
        <Route exact path="/" component={Home} />
        <Route exact path="/listings" render={(props) => <Listings appwrite={appwrite} {...props} />} />
        <Route exact path="/listings/create" render={(props) => <CreateListing appwrite={appwrite} {...props} />} />
        <Route exact path="/listings/:id" render={(props) => <ListingDetails appwrite={appwrite} {...props} />} />
        */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
