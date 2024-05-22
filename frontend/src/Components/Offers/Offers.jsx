import React from 'react'
import './Offers.css'
import exlusive_image from '../Assets/exclusive_image2.png'

const Offers = () => {
  return (
    <div className='offers'>
      
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Members for you</h1>
        <p>ONLY  THE MOST ACTIVE</p>
        <button>Check Now!!</button>

      </div>

      <div className="offers-right">
        <img src={exlusive_image} alt="" />



      </div>





    </div>
  )
}

export default Offers
