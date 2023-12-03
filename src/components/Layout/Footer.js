
import React from 'react';
import { NavLink,Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-dark text-light p-3">
      <h4 className='text-center'>
        HAPPY SHOPPING 
      </h4>
      <p className='text-center'>
        Thank you for visiting our website. We hope you find the best deals and enjoy your shopping experience with us!
      </p>
      <div className="text-center mt-3">
        <NavLink to="/contact" className="footer-link" href="#">Contact Us</NavLink>
        <Link to="/policy">Privacy Policy</Link>
        <Link to="/About">About</Link>
      </div>
    </div>
  );
};

export default Footer;

