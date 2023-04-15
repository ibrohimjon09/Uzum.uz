import React from 'react'
import './Navbar.css'
import { FiMenu, FiSearch, FiUser } from "react-icons/fi";
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineHome } from "react-icons/ai";
import { NavLink } from 'react-router-dom';
import { NAVBAR_BOTTOM_DATA } from "../../static";

function Navbar() {
  return (
    <>
       <div className='navbar container'>
        <div className="nav_logo">
            <NavLink to={"/"}>uzum market</NavLink>
        </div>
        <button className='nav_katalog-btn'>
            <FiMenu/>
            <span>Katalog</span>
        </button>
        <div className="nav_search">
            <input type="text" placeholder='Qidirish...'/>
            <button>
                <FiSearch/>
            </button>
        </div>
        <div className="nav_links">
            <NavLink to={"/"} className="nav_link">
                 <AiOutlineHome/>
                 <span>Bosh sahifa</span>
            </NavLink>
            <NavLink to={"/login"} className="nav_link">
                 <FiUser/>
                 <span>Kirish</span>
            </NavLink>
            <NavLink to={"/wishlist"} className="nav_link">
                 <AiOutlineHeart/>
                 <span>Saralangan</span>
            </NavLink>
            <NavLink to={"/cart"} className="nav_link">
                 <AiOutlineShoppingCart/>
                 <span>Savatcha</span>
            </NavLink>
        </div>
    </div>
    <div className="container nav_bottom">
        {
            NAVBAR_BOTTOM_DATA?.map((item, inx) =>{
                return <span key={inx}>{item}</span>
            })
        }
    </div>
    </>
  )
}

export default Navbar