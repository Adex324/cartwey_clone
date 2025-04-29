import React, { useState } from 'react'
import AltNavbar from './AltNavbar.jsx'
import Footer from '../components/Footer/Footer'
import Faq from '../components/Faq/Faq'
import scanner from "../assets/how_it_works.svg";
import "./Contact.css"
import ig from "../assets/ig.svg"
import x from "../assets/x.svg"
import linkedin from "../assets/linkedin.svg" ;
import phone_icon from "../assets/phone_icon.svg";
import mail_icon from "../assets/mail_icon.svg";
import location_icon from "../assets/location.svg";
import waitlist_send from '../assets/waitlist_send.svg'



const Contact = () => {
     const [formData, setFormData] = useState({ name: '', email: '', message:'' });
        const [errors, setErrors] = useState({});
        const [touched, setTouched] = useState({ name: false, email: false, message:'' });
      
        const validate = () => {
          const newErrors = {};
      
          if (touched.name && !formData.name.trim()) {
            newErrors.name = 'Please enter your full name';
          }
          if (touched.message && !formData.message.trim()) {
            newErrors.message = 'Please enter your Message';
          }
      
          if (touched.email) {
            if (!formData.email) {
              newErrors.email = 'Please enter your email';
            } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
              newErrors.email = 'Invalid email';
            }
          }
      
          return newErrors;
        };
      
        const handleSubmit = (e) => {
          const validationErrors = validate();
          if (Object.keys(validationErrors).length > 0) {
            e.preventDefault(); // stop form submission
            setErrors(validationErrors);
          } else {
            setErrors({});
          }
        };
      
        const handleChange = (e) => {
          const { name, value } = e.target;
          setFormData(prev => ({ ...prev, [name]: value }));
      
          // re-validate while typing
          setErrors(validate());
          
        };
      
        const handleBlur = (e) => {
          setTouched(prev => ({ ...prev, [e.target.name]: true }));
          setErrors(validate());
        };
  return (
    <div className="the_contact_div">
      <AltNavbar />
      <section className="contact">
      <div className="contact_text_container">
                  <div className="contact_text">
                      <h1>Contact Us</h1>
                      <img src={scanner} alt="" />
                  </div>
                  <div className="contact_p">
                      <p>Experience a rapid and secure payment system that guarantees seamless transactions, providing you with a smooth and reliable payment experience.</p>
                      </div>
            </div>
            <div className="touch_grid">
            <div className="left_side">
            <h2 className="in_touch">
                Get In Touch
            </h2>
            <div className="left_side_text">
                <div className="left_side_flex">
                <img src={phone_icon} alt="" />
                <h2>+234 805 819 750 5</h2>
                    </div>
                    <div className="left_side_flex">
                <img src={mail_icon} alt="" />
                <h2>cartwey1@gmail.com</h2>
                    </div>
                    <div className="left_side_flex">
                <img src={location_icon} alt="" />
                <h2>007 cartwey's location. Future of Shopping District , Tech Legends State</h2>
                    </div>

            </div>
            <div className="touch_icons">
                        <img src={ig} alt="" />
                        <img src={x} alt="" />
                        <img src={linkedin} alt="" />
                      </div>
            </div>
            <div className="right_side">
            <div className="contact-form-container">
      <form
        action="https://formspree.io/f/xyzwzvzd"
        method="POST"
        id="contact-js-form"
        className="contact_js_form"
        onSubmit={handleSubmit}
      >
        <div className="name">
          <p>Full Name</p>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div className="email">
          <p>Email Address</p>
          <input
            type="email"
            name="email"
            placeholder="example@example.com"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="message">
          <p>Your Message</p>
          <textarea
            name="message"
            placeholder="Type your message here"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            rows="5"
          />
          {errors.message && <span className="error">{errors.message}</span>}
        </div>

        <button type="submit">
          Send Message <img src={waitlist_send} alt="" />
        </button>
      </form>
    </div>
            </div>
            </div>
            </section>
      <Faq />
      <Footer />
    </div>
  )
}

export default Contact