import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import {
  Home,
  Product,
  Products,
  ViewProducts,
  Profile,
  Signup,
  Login,
  Sell,
  ViewImages,
  SelectCat
} from "./Pages/Pageimports";
import {
  Navbar,
  Footer,
  CreateProduct,
  UploadImages,
  UpdateProduct,
} from "./Components/Componentimports";

const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "products/:coll_id",
        element: <Products />,
      },

      {
        path: "/products/:coll_id/:id",
        element: <Product />,
      },
      {
        path: "/sell",
        element: <Sell />,
      },
      {
        path: "select_cat",
        element: <SelectCat />,
      },
      {
        path: "create_product/:id",
        element: <CreateProduct />,
      },
      {
        path: "/products/update/:coll_id/:id",
        element: <UpdateProduct />,
      },
      {
        path: "/view_products",
        element: <ViewProducts />,
      },
      {
        path: "upload_images",
        element: <UploadImages />,
      },
      {
        path: "view_img",
        element: <ViewImages />,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
