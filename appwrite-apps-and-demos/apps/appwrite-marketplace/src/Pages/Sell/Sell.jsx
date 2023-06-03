import React from 'react'
import "./Sell.css"
import Listings from '../CRUD_OF_PRODUCT/Listings'

const Sell = () => {
  return (
    <div className='sell'>
      <button><a href="/">Create a Product</a></button>
      <button><a href="/">Upload Images of Products</a></button>
      <button><a href="/">View Images of Products</a></button>
      <Listings/>
    </div>
  )
}

export default Sell
