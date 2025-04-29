import React from 'react'
import scanner from "../../assets/how_it_works.svg";
import './How_it_works.css' 

const How_it_works = () => {
  return (
   <section id='how_it_works' className='how_it_works'>
    <div className="how_text_container">
    <div className="how_text">
        <h1>How it works</h1>
        <img src={scanner} alt="" />
    </div>
    <div className="how_p">
        <p>At Cartwey, we're dedicated to transforming your shopping experience by integrating cutting-edge technology that allows you to cart products with ease.</p>
       </div>
       </div>
   </section>
  )
}

export default How_it_works