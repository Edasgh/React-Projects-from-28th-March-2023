import React, { useState, useEffect } from "react";
import { account } from "../Appwrite/appwrite_config";
import { useNavigate } from "react-router-dom";
import Listings from "../Pages/CRUD_OF_PRODUCT/Listings";

const Profile = () => {
    const navigate = useNavigate()
  const [userDetails, setUserDetails] = useState();

  useEffect(() => {
    const getData = account.get();
    getData.then(
      function (response) {
        setUserDetails(response);
      },
      function (error) {
        console.log(error);
      }
    );
  }, []);

  const handleLogOut=async()=>{
   try {
    await account.deleteSession("current")
    navigate("/")
   } catch (error) {
    console.log(error)
   }
  }

  

  return (
    <div>
      {userDetails ? (
        <>
        <h1>Welcome Seller</h1>
          <p>Name : {userDetails.name}</p>
          <p>Email : {userDetails.email}</p>
          <button onClick={handleLogOut}>LogOut</button>
          <Listings/>
        </>
      ) : (
        <button onClick={()=>{navigate("/login")}}>Login to view Profile</button>
      )}
    </div>
  );
};

export default Profile;
