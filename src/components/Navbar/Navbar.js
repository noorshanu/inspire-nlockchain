import React, { useState } from "react";
import "./Navbar.css";
import {
    FaTelegram,
    FaTwitter,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from '../../images/logo.png'

// import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav container">
        {/* 1st logo part  */}
        <div className="logo">
          <img src={Logo} alt="logo" className="logo-nav"/>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">about</a>
            </li>
            <li>
              <a href="/service">services</a>
            </li>
            <li>
              <a href="/contact">contact</a>

            </li>

            <li>
              <a
                href="https://www.youtube.com/channel"
                target="_thapa">
                <FaTelegram className="facebook" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                target="_thapa">
                <FaTwitter className="instagram" />
              </a>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
           
            <li>
             <a href="/" className="btn-btn-nav">Bug Checkers</a>
            </li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#home" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>

      
    </>
  );
};

export default Navbar;
