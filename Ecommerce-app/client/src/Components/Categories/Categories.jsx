import React from 'react'
import "./Categories.scss"
import {Link} from "react-router-dom"

const Categories = () => {
    const images=[
        "https://images.pexels.com/photos/4132651/pexels-photo-4132651.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/6567337/pexels-photo-6567337.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/4947849/pexels-photo-4947849.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/1162983/pexels-photo-1162983.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=1600"
    ]
  return (
    <div className='category'>
    <div className="col">
        <div className="row">
            <img src={images[0]} alt="" />
            <Link className='link'>
                <button>Sale</button>
            </Link>
            </div>
        <div className="row">
            <img src={images[1]} alt="" />
            <Link className='link' to="products/1">
                <button>Women's Section</button>
            </Link>
            </div>
    </div>
    <div className="col">
        <div className="row">
        <img src={images[2]} alt="" />
        <Link className='link'>
                <button>New Season</button>
            </Link>
        </div>
    </div>
    <div className="col col-l">
        <div className="row">
            <div className="col">
                <div className="row">
                <img src={images[3]} alt="" />
                <Link className='link' to="products/2">
                <button>Men's Section</button>
            </Link>
                </div>
            </div>
            <div className="col">
                <div className="row">
                <img src={images[4]} alt="" />
                <Link className='link'>
                <button>Accessories</button>
            </Link>
                </div>
            </div>
        </div>
        <div className="row">
        <img src={images[5]} alt="" />
        <Link className='link'>
                <button>Shoes</button>
            </Link>
        </div>
    </div>
     
    </div>
  )
}

export default Categories
