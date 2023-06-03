// npx create-react-app ecommerce-app
//cd ecommerce-app
// npm install appwrite
import React, { useEffect, useState } from "react";
import { Appwrite } from "appwrite";
import Listing from "./components/Listing";
import PostItem from "./components/PostItem";
import ContactSeller from "./components/ContactSeller";

const client = new Appwrite();

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    client
      .setEndpoint("YOUR_APPWRITE_ENDPOINT") // Replace with your Appwrite endpoint
      .setProject("YOUR_APPWRITE_PROJECT_ID") // Replace with your Appwrite project ID
      .setKey("YOUR_APPWRITE_API_KEY"); // Replace with your Appwrite API key

    client.account
      .get()
      .then((response) => setUser(response))
      .catch((error) => console.error(error));
  }, []);

  const handleLogin = () => {
    client.account
      .createSession("email", "YOUR_EMAIL", "YOUR_PASSWORD") // Replace with your email and password
      .then((response) => setUser(response))
      .catch((error) => console.error(error));
  };

  const handleLogout = () => {
    client.account
      .deleteSession("current")
      .then(() => setUser(null))
      .catch((error) => console.error(error));
  };

  return (
    <>
      {/* <div className="App">
        {user ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <button onClick={handleLogin}>Login</button>
        )}
      </div> */}

      <div className="App">
        {user ? (
          <>
            <button onClick={handleLogout}>Logout</button>
            <PostItem />
            <Listing />
          </>
        ) : (
          <button onClick={handleLogin}>Login</button>
        )}
        {user && <ContactSeller seller={user.name} />}
      </div>
    </>
  );
}

export default App;
