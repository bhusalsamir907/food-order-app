import React from 'react';
import "../styles/Contact.css";
import ContactImage from '../assets/contact.png'

function Contact() {
  return (
    <div className='contact'>
      <div className="leftSide" style={{backgroundImage:`url(${ContactImage})`}}>
          </div>

          <div className="rightSide">
              <h2>Contact Us</h2>
              <form id='contact-form' method='POST'>
                  <label htmlFor="name">Full Name</label>
                  <input type="text" name="name" id="name" placeholder='Enter Your Full Name' />
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" id="email" placeholder='Enter Your Email' />
                  <label htmlFor="message">Message</label>
                  <textarea name="message" placeholder='Enter Your Message' rows="10"></textarea>
                  <button type='submit'>Send Message</button>
              </form>
              </div> 
    </div>
  )
}

export default Contact;
