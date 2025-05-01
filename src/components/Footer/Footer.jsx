import React from "react";
import './Footer.css';
import { Link } from 'react-router-dom';
import cart_icon from '../../assets/cart-logo.svg'
import ig from "../../assets/ig.svg";
import x from "../../assets/x.svg";
import linkedin from "../../assets/linkedin.svg" ;

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container">
        
        <div className="footer_section brand">
          <h1 className="logo"><img src={cart_icon} alt="" />Cartwey</h1>
          <p>Reimagining retail for a smarter shopping experience</p>
          <div className="social_icons">
            <img src={ig} alt="" />
            <img src={x} alt="" />
            <img src={linkedin} alt="" />
          </div>
        </div>

        <div className="footer_section links">
          <h2>Link</h2>
          <ul>
            <li>
              <Link to="/" className="footer-link">Home</Link>
            </li>
            <li>
              <Link to="/about" className="footer-link">About us</Link>
            </li>
            <li>Service</li>
            <li>
              <Link to="/contact" className="footer-link">Contact US</Link>
            </li>
          </ul>
        </div>

        <div className="footer_section contact_links">
          <h2>Contact Links</h2>
          <ul>
            <li>Privacy & Policy</li>
            <li>Terms of Use</li>
            <li>FAQs</li>
          </ul>
        </div>

      </div>

      <div className="footer_bottom">
        <p>©2025 Cartwey. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;