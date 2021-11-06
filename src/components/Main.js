/** @format */

import React from "react";
import { FaSearch, FaMicrophone } from "react-icons/fa";
import { useState } from "react";

const Main = () => {
  const [text, setText] = useState("");

  let logo = `/img.png`;

  return (
    <div className='container'>
      {text ? <h2>{text}</h2> : <img src={logo} alt='side hustle logo' />}
      <div className='search-bar'>
        <FaSearch className='fa' />
        <input
          className='input'
          type='text'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <FaMicrophone className='fa' />
      </div>
      <div className='button'>
        <input value='Google Search' type='submit' />
        <input value="I'm Feeling Lucky" type='submit' />
      </div>
      <p className='paragraph'>
        Google offered in:
        <li>Hause</li>
        <li>Igbo</li>
        <li>Èdè Yorùbá</li>
        <li>Nigerian Pidgen</li>
      </p>
    </div>
  );
};

export default Main;
