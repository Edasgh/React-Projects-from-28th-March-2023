import React from 'react'
import Logo from "../assets/images/logo.svg"
import searchIcon from "../assets/images/search.svg"
import storeIcon from "../assets/images/store.svg"
const Navbar = () => {
  return (
    <>
    <nav className="nav-wrapper">
        <div className="nav-content">
            <ul className="list-styled">
            <li>
                <img src={Logo} alt="Apple" />
            </li>
            <li>
                <a  className="link-styled">Store</a>
            </li>
            <li>
                <a  className="link-styled">Mac</a>
            </li>
            <li>
                <a  className="link-styled">iPad</a>
            </li>
            <li>
                <a  className="link-styled">Watch</a>
            </li>
            <li>
                <a className="link-styled">Airpods</a>
            </li>
            <li>
                <a className="link-styled">TV & Home</a>
            </li>
            <li>
                <a className="link-styled">Entertainment</a>
            </li>
            <li>
                <a className="link-styled">Acessories</a>
            </li>
            <li>
                <a className="link-styled">Support</a>
            </li>
            <li>
              <img src={searchIcon} alt="search" />
            </li>
            <li>
            <img src={storeIcon} alt="store" />
            </li>
            </ul>
        </div>
    </nav>
    </>
  )
}

export default Navbar
