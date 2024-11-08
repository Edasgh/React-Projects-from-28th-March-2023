import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider, Outlet, useParams } from "react-router-dom";
import { Grid2} from "@mui/material";

import Header from "./components/layout/Header";
import ProtectRoutes from "./components/auth/ProtectRoutes";
import Title from "./components/shared/Title";
import Chatlist from "./components/specific/Chatlist";

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Chat = lazy(() => import("./pages/Chat"));
const Groups = lazy(() => import("./pages/Groups"));

import not_found from "./assets/not_found.png";
import LayoutLoader from "./components/layout/Loaders";
import { sampleChats } from "./constants/sampleData";
import Profile from "./components/shared/Profile";

const user = true;

const LayOut = () => {

   const params = useParams();
   const chatId = params.chatId;


   const handleDeleteChat = (e, _id, groupChat)=>{
    e.preventDefault();
    console.log(e);
    console.log(_id);
    console.log(groupChat);
    
   }

  return (
    <ProtectRoutes user={user}>
      <Suspense fallback={<LayoutLoader />}>
        <Title />
        <Header />
        <Grid2
          container
          height={"calc(100vh - 4rem)"}
          width={"100vw"}
          direction={"row"}
          columns={3}
          wrap={"nowrap"}
        >
          <Grid2
            sm={4}
            md={3}
            sx={{
              display: { xs: "none", sm: "block" },
            }}
            width={"70%"}
            height={"100%"}
          >
            <Chatlist chats={sampleChats} chatId={chatId} 
            onlineUsers={["1","2"]} handleDeleteChat={handleDeleteChat} 
             />
          </Grid2>
          <Grid2
            xs={12}
            sm={8}
            md={5}
            lg={6}
            width={"160%"}
            height={"100%"}
            
          >
            <Outlet />
          </Grid2>
          <Grid2
            md={4}
            lg={3}
            width={"90%"}
            height={"100%"}
            sx={{
              display: { xs: "none", md: "block" },
              padding: "2rem",
              bgcolor: "rgba(0,0,0,0.85)",
            }}
          >
           <Profile/>
          </Grid2>
        </Grid2>
      </Suspense>
    </ProtectRoutes>
  );
};

const LoginPage = () => {
  return (
    <ProtectRoutes user={!user} redirect={"/"}>
      <Login />
    </ProtectRoutes>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,

    children: [
      {
        path: "",
        element: <Home />,
      },

      {
        path: "chats/:chatId",
        element: <Chat />,
      },
      {
        path: "groups",
        element: <Groups />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "*",
    element: (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexWrap: "wrap",
          overflow: "hidden",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f7f8f6",
        }}
      >
        <p
          style={{ fontSize: "3rem", fontWeight: "bold", textAlign: "center" }}
        >
          404 : Not Found!
        </p>
        <img
          src={not_found}
          style={{ width: "300px", height: "380px", margin: "1rem" }}
        />
      </div>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
