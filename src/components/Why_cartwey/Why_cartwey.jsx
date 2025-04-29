import React from 'react'
import "./Why_cartwey.css";
import scanner from "../../assets/white_scanner.svg";
import user_pic from "../../assets/user_pic.svg";
import tag_pic from "../../assets/tag_pic.svg";
import scan_pic from "../../assets/scan_pic.svg";
import padlock_pic from "../../assets/padlock_pic.svg";
import copy_pic from "../../assets/copy_pic.svg";
import message_pic from "../../assets/message_pic.svg";

import why_video from "../../assets/why_video.mp4";
const Why_cartwey = () => {
   return (
     <section id='why_cartwey' className='why_cartwey'>
      <div className="why_text_container">
            <div className="why_text">
                <h1>Why Cartwey?</h1>
                <img src={scanner} alt="" />
            </div>
            <div className="why_p">
                <p>Experience a rapid and secure payment system that guarantees seamless transactions, providing you with a smooth and reliable payment experience.</p>
                </div>
         </div>
         <div className="why_grid">
            <div className="why_card">
                <div className="special_img">
                <img src={user_pic} alt="" />
                </div>
            
                <h1>User-Friendly Interface</h1>
                <p>Intuitive, sleek design that makes navigation a breeze.</p>
            </div>
            
            <div className="why_card">
            <div className="rounded_img">
                <img src={tag_pic} alt="" />
                </div>
                <h1>Exclusive Deals</h1>
                <p>Receive exclusive special offers tailored specifically for you.</p>
            </div>
            <div className="why_card">
            <div className="rounded_img">
                <img src={scan_pic} alt="" />
                </div>
                <h1>Quick Scan Function</h1>
                <p>Effortlessly add items to your cart by scanning their barcodes.</p>
            </div>
            <div className="why_card">
            <div className="rounded_img">
                <img src={copy_pic} alt="" />
                </div>
                <h1>Quick Delivery</h1>
                <p>Forget long waits. Experience our speedy delivery service.</p>
            </div>
            <div className="why_card">
            <div className="rounded_img">
                <img src={padlock_pic} alt="" />
                </div>
                <h1>Secure Checkout</h1>
                <p>A fast, secure payment system to ensure a smooth transaction.</p>
            </div>
            <div className="why_card">
            <div className="rounded_img">
                <img src={message_pic} alt="" />
                </div>
                <h1>Customer Support</h1>
                <p>Dedicated assistance at your fingertips whenever you need it.</p>
            </div>
            </div>
         <div className="video_div">
         <video className='video_rounded'autoPlay muted loop playsInline>
      <source src={why_video} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div className="video_text"><h1>Why Waiting For The Long Queue!</h1>
            <p>It’s your time to take the step and stop waiting for the long queue just to buy a product. We are always a step ahead to deliver and serve you the best.</p>
            <a href="#">Get to Know More!</a></div>
            
         </div>
     </section>
    )
}

export default Why_cartwey