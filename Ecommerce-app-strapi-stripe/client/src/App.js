import {
  createBrowserRouter,
  /*This is the recommended router for all React Router web projects. It uses the DOM(Document Object Model) History API to update the URL and manage the history stack.
It also enables the v6.4 data APIs like loaders, actions, fetchers and more. */
  RouterProvider,
  /*All data router objects are passed to this component to render your app and enable the rest of the data APIs. */
  Outlet,
  /* An '<Outlet>' should be used in parent route elements to render their child route elements. This allows nested UI to show up when child routes are rendered. If the parent route matched exactly, it will render a child index route or nothing if there is no index route. */
  // Route ,
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import Product from "./Pages/Product/Product";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import "./app.scss";

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
    //the Layout function is passed here as an element (that function is created to return a layout )
    children: [
      {
        path: "",
        element: <Home />,
      },

      {
        path: "products/:id",
        element: <Products />,
      },

      {
        path: "product/:id",
        element: <Product />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
