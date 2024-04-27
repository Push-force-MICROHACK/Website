import React, { useState } from 'react';
import './Navbar.css';
import logo from "../../assets/Frame2.svg";
import { Link } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { IoCloseSharp, IoMenu } from "react-icons/io5";

export default function Navbar() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='navbar'>
      <div className='logo'>
        <img src={logo} alt='logo' className='image'/>
        <h3 className='textlogo' onClick={scrollToTop}>COGNICORE</h3>
      </div>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <IoCloseSharp className='menubar' /> : <IoMenu className='menubar' />}
      </div>
      <div className={menuOpen ? "open rightsidenavbar" : "rightsidenavbar"}>
        <ul className={menuOpen ? "open features1" : "features1"}>
          <ScrollLink to="description" smooth={true} duration={500} offset={-50}>
            <li className='feature'>Integration and APIs</li>
          </ScrollLink>
          <ScrollLink to="why-cognicore" smooth={true} duration={500} offset={-50}>
            <li className='feature'>Resources</li>
          </ScrollLink>
          <ScrollLink to="subscription" smooth={true} duration={500} offset={-50}>
            <li className='feature'>Pricing</li>
          </ScrollLink>
        </ul>
        <div className='button1'>
          <button className='button'>Get your Api</button>
        </div>
      </div>
    </div>
  );
}
