import React, { useState } from "react";
import { account } from "../../Appwrite/appwrite_config";
import { useNavigate } from "react-router-dom";
import { RemoveRedEyeIcon } from "../../assets/icons/imports";
import "./Login.scss";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
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
  const logInUser = async (e) => {
    e.preventDefault();
    try {
      await account.createEmailSession(user.email, user.password);
      navigate("/profile");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form className="login-form" id="login" method="post" onSubmit={logInUser}>
      <h2>Login to your Ecom Account</h2>
      <div className="label-input">
        <label htmlFor="email">Enter Your Email</label>
        <input
          type="email"
          name="email"
          id="email"
          autoComplete="email@mail.com"
          placeholder="email@mail.com"
          required
          onChange={(e) => {
            setUser({
              ...user,
              email: e.target.value,
            });
          }}
        />
        </div>
        <div className="label-input">
        <label htmlFor="password">Enter Your Password</label>
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
        </div>
        <span className="see-hide-pw">
          <RemoveRedEyeIcon
            className="see-hide-pw-icon"
            onClick={togglePassword}
          />
          <span>{type === "password" ? "see password" : "hide password"}</span>
        </span>
        <button type="submit">LogIn</button>
      </form>
    </>
  );
};

export default Login;
