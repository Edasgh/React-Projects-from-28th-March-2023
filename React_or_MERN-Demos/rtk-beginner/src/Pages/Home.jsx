import React from 'react'
import Products from '../Components/products'

const Home = () => {
  return (
    <>
     <h2 className="heading">Welcome to the Redux toolkit store</h2>
            <section>
                <h3>Products</h3>
                <Products />
            </section>
    
    
    </>
  )
}

export default Home