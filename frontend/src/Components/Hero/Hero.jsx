import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon2.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'


const Hero = () => {
  return (
    <div className='hero'>
      
        <div className="hero-left">
            <h2>Welcome to Matured Minds Group Shopper.</h2>
            <div>
                <div className="hand-hand-icon">
                    <p>You have just</p>
                    <img src={hand_icon} alt=""/>
                </div>
                <span>$1000</span>
                <p>to shop Your favorite Member(s)</p>
            </div>
            <div className="hero-latest-btn">
                <div><b>Start Shopping!!!.</b><i>Spend it wisely!</i></div>
                <img src={arrow_icon} alt="" />
            </div>
        </div>

        <div className="hero-right">
            <img src={hero_image} alt="" />


        </div>






    </div>
  )
}

export default Hero
