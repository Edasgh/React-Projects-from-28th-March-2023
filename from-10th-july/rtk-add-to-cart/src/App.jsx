import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Screens/Home'
import Cart from './Screens/Cart'


function App() {
  

  return (
    <>
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/cart" element={<Cart/>}/>
      {/* <Route exact path="/:id" element={<SingleProduct/>}/> */}
     </Routes>
     
     </BrowserRouter>
    </>
  )
}

export default App
