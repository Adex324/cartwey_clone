import React, { useState } from 'react';
import './Waitlist.css';
import cart_icon from '../../assets/cart-logo.svg';
import waitlist_send from '../../assets/waitlist_send.svg'
import lets_go from '../../assets/lets_go.svg'

const Waitlist = () => {
    const [formData, setFormData] = useState({ name: '', email: '' });
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({ name: false, email: false });
  
    const validate = () => {
      const newErrors = {};
  
      if (touched.name && !formData.name.trim()) {
        newErrors.name = 'Please enter your full name';
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
    <section id="waitlist" className='waitlist'>
        <div className="wait_div">
            <div className="join"> <p>Join the Cartwey Waitlist</p><img src={cart_icon} alt="" /></div>
           
            <h1>Be the First to Experience the Future of Retail Checkout</h1>
            <h2>We’re working hard to bring you a revolutionary self-checkout experience. Sign up below to be the first to know when Cartwey is ready for launch! You'll get exclusive early access and updates straight to your inbox.</h2>
            <div className="form-container">
      <form
        action="https://formspree.io/f/mpwdzzel"
        method="POST"
        id="contact-form"
        className="waitlist_form"
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

        <button type="submit">
          Join The Waitlist <img src={waitlist_send} alt="" />
        </button>
      </form>
    </div>
    <p className='get'>Get early access and stay ahead of the queue! <img src={lets_go} alt="" /></p>
        </div>
         
    </section>
  )
}

export default Waitlist