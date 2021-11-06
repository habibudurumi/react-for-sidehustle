/** @format */

import React from "react";

const Footer = () => {
  return (
    <footer className='footer'>
      <p className='country'>Nigeria</p>
      <div className='contacts'>
        <div className='second'>
          <p>About</p>
          <p>Advertising</p>
          <p>Business</p>
          <p>How Search Works</p>
        </div>
        <div className='first'>
          <p className='carbon'>
            <img
              className='googleimg'
              src='./googleimg.png'
              alt='google footer'
            />
            carbon neutral since 2007
          </p>
        </div>
        <div className='third'>
          <p>Privacy</p>
          <p>Terms</p>
          <p>Settings</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
