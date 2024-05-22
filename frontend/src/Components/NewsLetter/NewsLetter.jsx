import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive offers in your Email</h1>
        <p>Subscribe to our News Letter to Stay Updated</p>
        <div>
            <input type='email' placeholder='Your Email Id'/>
            <button>Subscribe</button>
        </div>
      
    </div>
  )
}

export default NewsLetter
