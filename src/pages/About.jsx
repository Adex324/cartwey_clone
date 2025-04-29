import React from 'react'
import './About.css';
import AltNavbar from './AltNavbar.jsx';
import Footer from '../components/Footer/Footer';
import Faq from '../components/Faq/Faq';
import shopping from "../assets/shopping.png";
import missionImage from "../assets/mission_pic.png";
import visionImage from "../assets/vision_pic.png";
import scanner from "../assets/how_it_works.svg";
import who_we_are from "../assets/wo_we_are.png";

const About = () => {
  return (
    <>
      <AltNavbar />
      
      <div className="wavy-section">
      <div className="content">
        <h1>About Us</h1>
        <p>
          At Cartwey, we’re reimagining the in-store shopping experience—making it faster, smarter, and truly checkout-free.
          No more long queues, no more unnecessary delays. Just scan, pay, and go. Simple.
        </p>
      </div>
      <div className="wavy_image">
        <img src={shopping} alt="" />
      </div>
      <div className="wavy_stuff">
      <svg className="wave" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
  <path 
    fill=" rgb(244, 248, 248)" 
    d="M0,160 C480,0 960,320 1440,160 L1440,320 L0,320 Z"
  />
</svg>
      </div>
    
      </div>
      <div className="mission_vission">
        <div className="mission_text">
          <h1>Our Mission & Vision</h1>
           <img src={scanner} alt="" />
        </div>
        <p className='mission_p'>Empowering shoppers for a seamless shopping experience.</p>
       <div className="mis_grid">
       <div className="mis_div">
       <img src={missionImage} alt="" />
       <p>To empower shoppers with seamless self-checkout technology that saves time and enhances convenience, while helping stores modernize their retail operations with smart, scalable tools.</p>
       </div>
       <div className="mis_div">
       <img src={visionImage} alt="" />
       <p>To become the go-to self-checkout solution across Africa and beyond—empowering stores of all sizes to offer fast, secure, and cashier-free shopping experiences</p>
       </div>
       </div>
       <div className="who_we_are">
        <div className="mission_text">
        <h1>Who we are</h1>
        <img src={scanner} alt="" />
        </div>
        <div className="who_we_p">
      <p className="description">
        We're a passionate team of <span className="highlight">Innovators</span>,{' '}
        <span className="highlight">Developers</span>, and{' '}
        <span className="highlight">Retail Enthusiasts</span> who've experienced the pain of long 
        queues and clunky POS systems. Cartwey is our answer to a modern retail world that values 
        speed, simplicity, and smart technology.
      </p>
      <img src={who_we_are} alt="" />

      <div className="last">
        <h1>Join the Cartwey Revolution</h1>
        <p>Be part of a team shaping the future of retail. Explore our solutions, share your ideas, and let’s revolutionize shopping together!</p>
      </div>
    </div>
       </div>
      </div>
      <Faq />
      <Footer />
    </>
  )
}

export default About