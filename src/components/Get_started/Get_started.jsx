import React from 'react';
import scanner from "../../assets/white_scanner.svg";
import playstore from "../../assets/playstore.svg";
import appstore from "../../assets/appstore.svg";
import get_main from "../../assets/get_main_pic.svg";
import './Get_started.css';


const Get_started = () => {
  return (
    <section className='get_started' id="get_started">
    <div className="get_text_container">
        <div className="get_text">
            <h1>Get Started
            </h1>
            <img src={scanner} alt="" />
        </div>
                        <div className="get_p">
                        <p>Steer your shopping experience in a new direction with us. Scan, Cart, and Checkout! Join the revolution today!. Just a click to start with us.</p>
                    </div>
           </div>
           <div className="stores">
            <button className="playstore">
                <img src={playstore} alt="" />
               
            </button>
            <button className="appstore">
                <img src={appstore} alt="" />
                
            </button>
           </div>
           <div className="pic">
            <img className="image" src={get_main} alt="" srcset="" />
           </div>
           </section>
  )
}

export default Get_started