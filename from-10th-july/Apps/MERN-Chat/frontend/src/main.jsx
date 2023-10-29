import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";

import HomePage from "./Pages/HomePage";
import ChatPage from "./Pages/ChatPage";

const Layout = () => {
  return (
    <div className="app">
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    //the Layout function is passed here as an element (that function is created to return a layout )
    children: [
      {
        path: "",
        element: <HomePage />,
      },

      {
        path: "chats",
        element: <ChatPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
