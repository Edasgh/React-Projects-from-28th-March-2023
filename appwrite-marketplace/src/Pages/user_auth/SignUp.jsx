import React , {useState} from 'react'
import {ID} from "appwrite";
import { account } from '../../Appwrite/appwrite_config';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
      name: "",
      email: "",
      password: "",
    });
    //Signup
    const signUpUser = async (e) => {
      e.preventDefault();
      //promise to create a user account
      const promise = account.create(
        // uuidv4(),
        // for generating an unique id
        ID.unique(),
        user.email,
        user.password,
        user.name
      );
  
      promise.then(
        function (response) {
          console.log(response);
          navigate("/login"); //success
        },
        function (error) {
          console.log(error); // failure
        }
      );
    };
  return (
    <>
      <form id="signup" method="post" >
        <label htmlFor="name">Enter Your Name</label>
        <input
          type="text"
          name="name"
          id="name"
          autoComplete="name"
          required
          onChange={(e) => {
            setUser({
              ...user,
              name: e.target.value,
            });
          }}
        />
        <label htmlFor="email">Enter Your Email</label>
        <input
          type="email"
          name="email"
          id="email"
          autoComplete="email@mail.com"
          required
          onChange={(e) => {
            setUser({
              ...user,
              email: e.target.value,
            });
          }}
        />
        <label htmlFor="password">Enter Your Password</label>
        <input
          type="text"
          name="password"
          id="password"
          autoComplete="current-password"
          required
          onChange={(e) => {
            setUser({
              ...user,
              password: e.target.value,
            });
          }}
        />
        <button type="submit" onClick={signUpUser}>SignUp</button>
      </form>
    </>
  )
}

export default SignUp
