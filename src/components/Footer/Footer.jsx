import React from 'react';
import './Footer.css';
import LOGO from '../../assets/BLUELOGO.png'

const Footer = () => {
  return (
    <footer className='footer'>
      
      <div className='footer-container'>
      <img src={LOGO} alt='aaa' className='logoimg'></img>
        <div className='footer-column'>
          <h3 className='footer-title'>Navigation</h3>
          <div className='footer-menu'>
            <p className='footer-item'>Products</p>
            <p className='footer-item'>News</p>
            <p className='footer-item'>About Us</p>
            <p className='footer-item'>Support</p>
          </div>
        </div>
        <div className='footer-column'>
          <h3 className='footer-title'>About Us</h3>
          <div className='footer-menu'>
            <p className='footer-item'>Who we are</p>
            <p className='footer-item'>Our Team</p>
            <p className='footer-item'>Careers</p>
            <p className='footer-item'>Investors</p>
          </div>
        </div>
        <div className='footer-column'>
          <h3 className='footer-title'>Support</h3>
          <div className='footer-menu'>
            <p className='footer-item'>Documentation</p>
            <p className='footer-item'>Community</p>
            <p className='footer-item'>Get in Touch</p>
          </div>
        </div>
      </div>
      <div className='footer-bottom'>
        <p>&copy; 2024 BUILD-IT. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
