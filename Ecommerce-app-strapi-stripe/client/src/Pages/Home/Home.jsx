import React from 'react'
import "./Home.scss"
import Slider from '../../Components/Slider/Slider'
import FP from '../../Components/FeaturedProducts/FP'
import Categories from '../../Components/Categories/Categories'
import Contact from '../../Components/Contact/Contact'
const Home = () => {
  return (
    <>
      <div className="home">
        <Slider/>
        <FP type="Featured"/>
        <Categories/>
        <FP type="Trending"/>
        <Contact/>
      </div>
    </>
  )
}

export default Home
