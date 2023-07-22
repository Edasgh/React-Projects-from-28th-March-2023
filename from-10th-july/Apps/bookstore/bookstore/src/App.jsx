import { useState } from 'react'
import { BrowserRouter , Routes , Route , Link } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import CreateProduct from './Screens/CreateProduct/CreatePRoduct'
import Products from './Screens/Products/Products'
import Home from "./Screens/Home/Home"

function App() {
  

  return (
    <>
     <BrowserRouter>
     <Navbar/>
     <Routes>
<Route exact path="/" element={<Home/>} ></Route>
<Route exact path="/create-product" element={<CreateProduct/>} ></Route>
<Route exact path="/products" element={<Products/>} ></Route>


     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
