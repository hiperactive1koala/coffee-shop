import React from 'react'
import {BsInstagram ,BsTwitter, BsPinterest} from 'react-icons/bs'

import './contact.css'

const Contacts = () => {
  return (
    <div id='contacts'>
      <div className="social">
        <div className="instagram social-icon"><BsInstagram/></div>
        <div className="twitter social-icon"><BsTwitter/></div>
        <div className="pinterest social-icon"><BsPinterest/></div>
      </div>
      <div className="contact-info">
        <div className="address">
          <h4>Address:</h4>
          <p>2843 Dogwood Lane Tucson, AZ, Arizona</p>
        </div>
        <div className="email">
          <h4>Email:</h4>
          <p><a href="mailto:contact@coffeeshop.com">contact@coffeeshop.com</a></p>
        </div>
        <div className="phone">
          <h4>Phone:</h4>
          <p><a href="tel:361-681-4526">361-681-4526</a></p>
        </div>
      </div>
    </div>
  )
}

export default Contacts