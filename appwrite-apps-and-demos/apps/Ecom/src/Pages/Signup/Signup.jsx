import React, { useState } from "react";
import { ID } from "appwrite";
import { account } from "../../Appwrite/appwrite_config";
import { useNavigate } from "react-router-dom";
import "./Signup.scss";
import { RemoveRedEyeIcon } from "../../assets/icons/imports";

const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [type, setType] = useState("password");
  const togglePassword = () => {
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
  };
  //Signup
  const signUpUser = async (e) => {
    e.preventDefault();
    //promise to create a user account
    const promise = account.create(
      // for generating an unique id
      ID.unique(),
      user.email,
      user.password,
      user.name
    );

    promise.then(
      function (response) {
        console.log(response);
        navigate("/profile"); //success
      },
      function (error) {
        console.log(error); // failure
      }
    );
  };
  return (
    <>
      <form className="signup-form" id="signup" method="post" onSubmit={signUpUser}>
        <h2>Signup to Ecom</h2>
        <div className="label-input">
          <label htmlFor="name">Enter Your Name : </label>
          <input
            type="text"
            name="name"
            id="name"
            autoComplete="name"
            placeholder="Name"
            onChange={(e) => {
              setUser({
                ...user,
                name: e.target.value,
              });
            }}
            required
          />
        </div>

        <div className="label-input">
          <label htmlFor="email">Enter Your Email : </label>
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="email@mail.com"
            placeholder="email@mail.com"
            onChange={(e) => {
              setUser({
                ...user,
                email: e.target.value,
              });
            }}
            required
          />
        </div>
        <div className="label-input">
          <label htmlFor="password">Enter Your Password : </label>
          <input
            type={type}
            name="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) => {
              setUser({
                ...user,
                password: e.target.value,
              });
            }}
            required
          />
          <span className="see-hide-pw">

          <RemoveRedEyeIcon
            className="see-hide-pw-icon"
            onClick={togglePassword}
            />
          <span>
            {type==="password"?"show password":"hide password"}
          </span>
            </span>
        </div>
        <button type="submit">SignUp</button>
      </form>
    </>
  );
};

export default Signup;
