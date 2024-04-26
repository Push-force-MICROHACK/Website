import React from 'react'
import './Navbar.css'
import logo from "../../assets/Frame2.svg"
export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='logo'>
        <img src={logo} alt='logo' className='image'/>
        <h3 className='textlogo'> COGNICORE</h3>
      </div>
      <ul className='features'>
        <li className='feature'>Integration and APIs</li>
        <li className='feature'>Resources</li>
        <li className='feature'>Pricing</li>
      </ul>
      <div className='buttons'>
        <button className='button '>Get your Api</button>
      </div>
    </div>
  )
}

