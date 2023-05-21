import React ,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { account } from '../Appwrite/appwrite_config'

const LogIn = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
      email: "",
      password: "",
    });
  
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
      <form id="login" method="post">
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
          onChange={(e) => {
            setUser({
              ...user,
              password: e.target.value,
            });
          }}
        />
        <button type="submit" onClick={logInUser}>LogIn</button>
      </form>
    </>
  )
}

export default LogIn
