import React, { useState, useEffect } from "react";
import { account } from "../../Appwrite/appwrite_config";
import { useNavigate } from "react-router-dom";
import "./Profile.scss";

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
    <div className="profile">
      {userDetails ? (
        <>
          <div className="user-details">
            <h2>User Details</h2>
            <p>
             
              <span>Name </span>: {userDetails.name}
            </p>
            <p>
             
              <span> Email </span>: {userDetails.email}
            </p>
            <button className="logout" onClick={handleLogOut}>
              Log Out
            </button>

            <button className="sell"  onClick={()=>{navigate("/sell")}}>
            Go to Selling Section 
         </button>
          </div>
        </>
      ) : (
        <>
          <div className="buttons">
            <button
              onClick={() => {
                navigate("/login");
              }}
            >
              Login To Continue
            </button>
          </div>
         
        </>
      )}
    </div>
  );
};

export default Profile;
