/** @format */

import React from "react";
import { FaTh } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='right-nav'>
      <div className='gmail con'>Gmail</div>
      <div className='images con'>Images</div>
      <div className='icon con'>
        <FaTh />
      </div>
      <img className='react' src='./logo192.png' alt='logo' />
    </div>
  );
};

export default Navbar;
