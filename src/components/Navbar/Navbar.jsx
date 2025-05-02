import React, { useState } from 'react'
import './Navbar.css' 
import cart_icon from '../../assets/cart-logo.svg'
import { Link } from 'react-router-dom';
const Navbar = () => {
    const handleScrollToGetStarted = () => {
        const element = document.getElementById('get_started');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };
  const [isActive, setIsActive]=useState('')

  const toggleMenu = () => {
    setIsActive(!isActive);
  }
  
  return (
    <div>
      <header>
        <nav className="navbar">
            <div className="icon"><img  className="cart_icon" src={cart_icon} alt="" /><a href="#" className="nav-branding">Cartwey</a></div>
            <ul className="nav-menu">
                <li className="nav-item">
                 <Link to="/" className="nav-link">Home </Link>
                </li>
                <li className="nav-item ">
                    <a href="#how_it_works" className="nav-link">How It Works</a>
                </li>
                <li className="nav-item">
                <Link to="/about" className="nav-link">About us</Link>
                </li>
                <li className="nav-item">
                    <a href="#faq" className="nav-link">FAQs</a>
                </li>
                <li className="nav-item">
                <Link to="/contact" className="nav-link">Contact</Link>
                </li>
              
            </ul>
            <a  className = "nav-button" onClick={handleScrollToGetStarted}>
            Get Started</a>
            
                
            <div className={`hamburger ${isActive ? 'active' : ''}`} onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </nav>
    </header>
    <div className={`hidden-menu ${isActive ? 'active' : ''}`}>
    <hr className='hid_hr'/>
    <ul className='hidnav-menu'>
    <li className="hidnav-item">
    <Link to="/" className="hidnav-link">Home </Link>
    </li>
    <li className="hidnav-item .how_it_nav_item">
        <a href="#how_it_works" className="hidnav-link">How It Works</a>
    </li>
    <li className="hidnav-item">
    <Link to="/about" className="hidnav-link">About us</Link>
    </li>
    <li className="hidnav-item">
        <a href="#faq" className="hidnav-link">FAQs</a>
    </li>
    <li className="hidnav-item">
    <Link to="/contact" className="hidnav-link">Contact</Link>
    </li>
  
</ul>
</div>
    </div>
  )
}

export default Navbar;