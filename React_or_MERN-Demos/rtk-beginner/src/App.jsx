
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Pages/home'
import Cart from './Pages/Cart'
import { Provider } from 'react-redux'
import store from "./store/store";

function App() {
  

  return (
    <>
    <Provider store={store}>

      <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/cart" element={<Cart />}></Route>
                    </Routes>
                </BrowserRouter>
        
    </Provider>
    </>
  )
}

export default App
