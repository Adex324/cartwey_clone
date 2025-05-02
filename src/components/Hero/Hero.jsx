import React from 'react'
import cart_icon from '../../assets/cart-logo.svg'
import waitlist_arrow from  '../../assets/down_arrow.svg'
import service_cards from '../../assets/service-cards.svg'
import './Hero.css'
const Hero = () => {
  const handleScrollToWaitlist = () => {
    const element = document.getElementById('waitlist');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const handleScrollToGetStarted = () => {
    const element = document.getElementById('get_started');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section className='hero'>
        <img src={cart_icon} alt="" className="hero_logo" />
        <div className="hero-text">
        <h1>Your Self–Checkout App</h1>
        <p>
          Revolutionizing the shopping experience by empowering businesses with a fast,
          convenient, and secure self-checkout solution for their customers.
        </p>
       </div>
       <div className="hero_buttons">
        
            <a  className = "get_started_button" onClick={handleScrollToGetStarted}>
            Get Started</a>
            
            <div className="join_waitlist">
              <a href="#waitlist">Join waitlist</a><img src={waitlist_arrow} alt="" onClick={handleScrollToWaitlist}/>

            </div>
          
       </div>
       <div className="service_cards">
        <img  src={service_cards} alt="" />
       </div>
    </section>
  )
}

export default Hero