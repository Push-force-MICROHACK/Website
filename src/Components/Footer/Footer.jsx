import React from 'react'
import "./Footer.css"
import logo from "../../assets/Frame2.svg"
import { FaYoutube, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
export default function Footer() {
  return (
    <div className='footersections'>
    <div className='footersection'>
      <div className='leftside'>
        <p className='footertext'>The Best API to Add To Your GED System</p>
      </div>
      <div className='rightside'>
        <div className='rightsides'>
            <h3 className='title'>Company</h3>
            <ul className='details'>
                <li>Blog</li>
                <li>Careers</li>
                <li>Love</li>
            </ul>
        </div>
        <div className='rightsides'>
            <h3 className='title'>Products</h3>
            <ul className='details'>
                <li>Pricing</li>
                <li>Download</li>
                <li>AI</li>
                <li>Sales</li>
                <li>Entreprise</li>
                <li>Outlook</li>
            </ul>
        </div>
        <div className='rightsides'>
            <h3 className='title'>Support</h3>
            <ul className='details'>
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>Tutorials</li>
            </ul>
        </div>
        <div className='rightsides'>
            <h3 className='title'>Legal</h3>
            <ul className='details'>
                <li>Privacy</li>
                <li>Terms</li>
                <li>Love</li>
            </ul>
        </div>
      </div>
    </div>
    <div className='line'></div>
    <div className='socialaccount'>
        <div className='part1'>
            <img src={logo} alt="logo picture" />
            <h3>COGNICORE</h3>
        </div>
        <div className='part2'>
            <FaYoutube className='icon'/>
            <FaTwitter className='icon'/>
            <FaLinkedinIn className='icon'/>
            <SiGmail className='icon'/>
        </div>
    </div>
    </div>
  )
}
