import React, { useState } from 'react'
import './Header.css'

export default function Header() {
    const [active, setActive] = useState("nav_menu");
    const navToggle = () => {
        active === "nav_menu" 
        ? setActive("nav_menu nav_active") 
        : setActive("nav_menu");
    };

  return (
    <nav className="nav">
        <a href="#" className="nav_brand">Lynx</a>
        <ul className={active}>
            <li className="nav_item">
                <a href="#" className="nav_link">Home</a>
            </li>
            <li className="nav_item">
                <a href="#" className="nav_link">About</a>
            </li>
            <li className="nav_item">
                <a href="#" className="nav_link">Skills</a>
            </li>
            <li className="nav_item">
                <a href="#" className="nav_link">Contact</a>
            </li>
            <li className="nav_item">
                <a href="#" className="nav_link">Blog</a>
            </li>
        </ul>
        <div onClick={navToggle} className="nav_toggle">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
        </div>
    </nav>

  )
}
