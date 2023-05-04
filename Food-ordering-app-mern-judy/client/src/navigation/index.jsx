import {BrowserRouter , Routes , Route} from "react-router-dom"
import Header from "../components/Header"
import {Home , Cart , Login ,Menu , Register ,PaymentSuccess} from "../pages/imports"
// import About from "../components/About"

export const Navigation=()=>{
    return(
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route exact path="/" element={<Home/>} />
            {/* <Route exact path="#about" element={<About/>} /> */}
            <Route exact path="/cart" element={<Cart/>} />
            <Route exact path="/login" element={<Login/>} />
            <Route exact path="/register" element={<Register/>} />
            <Route exact path="/menu" element={<Menu/>} />
            <Route exact path="/payment-success" element={<PaymentSuccess/>} />
        </Routes>
        </BrowserRouter>
    )
}