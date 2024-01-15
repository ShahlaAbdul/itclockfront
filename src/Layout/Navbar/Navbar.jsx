import React from 'react'
import "./navbar.scss"
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
       <div className="navbar">
     <div className="navbar_left">
     <div className="navbar_image">
            <img src="https://preview.colorlib.com/theme/itlock/assets/img/logo/logo.png.webp" alt="" />
        </div>
        <div className="navbar_pages">
            <ul>
                <li>Home</li>
              <li><NavLink to={"/add"}>Add Page</NavLink></li>
                <li>Services</li>
                <li>Case Study</li>
                <li>Blog</li>
            </ul>
        </div>
     </div>
        <div className="navbar_button">
            <button>Free Quote</button>
            <p>Call: 10 (78) 837 3647</p>
        </div>
       </div>
    </nav>
  )
}

export default Navbar