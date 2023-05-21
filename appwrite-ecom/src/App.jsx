import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import LogIn from './Components/LogIn'
import SignUp from './Components/SignUp'
import Profile from './Components/Profile'
import Home from "./Pages/Home"
import ProductDetails from './Pages/CRUD_OF_PRODUCT/ProductDetails'
import CreateProduct from './Pages/CRUD_OF_PRODUCT/CreateProduct'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route exact path ="/" element={<Home/>} />
        <Route exact path ="/login" element={<LogIn/>} />
        <Route exact path ="/signup" element={<SignUp/>} />
        <Route exact path ="/profile" element={<Profile/>} />
        <Route exact path="/listings/create" element={<CreateProduct/>} />
        <Route exact path="/listings/:id" element={<ProductDetails   />} />
        {/* 
        <Route exact path="/" component={Home} />
        <Route exact path="/listings" render={(props) => <Listings appwrite={appwrite} {...props} />} />
        <Route exact path="/listings/create" render={(props) => <CreateListing appwrite={appwrite} {...props} />} />
        <Route exact path="/listings/:id" render={(props) => <ListingDetails appwrite={appwrite} {...props} />} />
        */}
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
