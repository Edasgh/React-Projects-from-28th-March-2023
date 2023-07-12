import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const cartItems = useSelector((state)=>state.cart)
  return (
    <>
    <nav className="navbar">
     <ul className="first-ul">
        <li><Link to="/" className="home-menu">Home</Link></li>
        <li><Link to="#About">About</Link></li>
        <li><Link to="#Profile">Profile</Link></li>
     </ul>

     <ul className="second-ul">
       <li><Link to="/cart" className="cart-menu">Cart</Link></li>
       <li>Cart Items : <span className="itemLength">{cartItems.length}</span></li>
     </ul>
   </nav>
    </>
  )
}

export default Navbar