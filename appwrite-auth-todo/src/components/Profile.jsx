import React, { useState, useEffect } from "react";
import { account } from "../appwrite/appwriteConfig";
import { useNavigate, Link } from "react-router-dom";
import TodoForm from "./TodoForm";
import Todos from "./Todos";

const Profile = () => {
  const navigate = useNavigate();
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

  const handleLogOut = async () => {
    try {
      await account.deleteSession("current");
      navigate("/");
    } catch (error) {
    console.log(error);
    }
  };

  return (
    <div>
      {userDetails && (
        <>
        <p>Name : {userDetails.name}</p>
      <p>Email : {userDetails.email}</p>
      <button className="bg-slate-500 text-white" onClick={handleLogOut}>Log Out</button>
      <TodoForm/>
      <Todos/>
        </>
      )}
      <h1>Hi, welcome to my profile</h1>
      
      {/* <p>{userDetails.name}</p> */}
    </div>
  );
};

export default Profile;
