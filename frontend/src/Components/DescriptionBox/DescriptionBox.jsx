import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>

        </div>
        <div className="descriptionbox-description">
            <p>Ecommerce refers to when individuals or companies buy and sell goods or services online.
                 Ecommerce can take place within a company's smartphone app, on a social media platform,
                  or in an online marketplace. You can participate in ecommerce anywhere you can establish an internet connection. 
                  Common examples includes online shopping, electronic payments, online auctions, and internet banking</p>
                  <p>
                  Ecommerce transactions happen across a variety of devices and platforms,                   
                   using a number of different payment methods. Other applications and businesses support this ecosystem,
                    from ad platforms like Google Ads to third-party logistics companies to ecommerce store apps. 
                    Let’s explore a few of the technologies powering online sales.
                  </p>
        </div>
      
    </div>
  )
}

export default DescriptionBox
