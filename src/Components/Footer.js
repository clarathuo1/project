import React from 'react';
import "../App.css";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import Logo from "../Components/Assets/Logo.svg";

function Footer() {
  return (
    <div className='footer-wrapper'>
      <div className='footer-section-one'>
        <div className='footer-logo-container'>
          <img src={Logo} alt="Logo" className='footer-logo' />
        </div>
        <div className='footer-icons'>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className='footer-icon'>
            <BsTwitter />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className='footer-icon'>
            <SiLinkedin />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className='footer-icon'>
            <BsYoutube />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className='footer-icon'>
            <FaFacebookF />
          </a>
        </div>
      </div>
      <div className='footer-section-two'>
        <div className='footer-section-columns'>
          <span className='footer-column-title'>Quality</span>
          <span>Help</span>
          <span>Share</span>
          <span>Careers</span>
          <span>Testimonials</span>
          <span>Work</span>
        </div>
        <div className='footer-section-columns'>
          <span>+254 712 345 678</span>
          <span>hello@food.com</span>
          <span>press@food.com</span>
          <span>contact@food.com</span>
        </div>
        <div className='footer-section-columns'>
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;