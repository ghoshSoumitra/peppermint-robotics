import React from 'react';
import "./style.css";
const Header = () => {
  return (
    <header>
      <div className="logo">
      <img className='peplogo' src='https://getpeppermint.co/wp-content/uploads/2017/05/Untitled-design-86-1.png' alt='logo'/>
      </div>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">About us</a></li>
          <li><a href="/">Solution</a></li>
          <li><a href="/">Products</a></li>
          <li><a href="/">Resources</a></li>
          <li><a href="/">Contact us</a></li>
        </ul>
      </nav>
      <div className='rightheader'>
        <input type='text'/>
        <img src='https://cdn-icons-png.flaticon.com/128/1384/1384028.png' alt='youtube' className='logos'/>
        <img src='https://cdn-icons-png.flaticon.com/128/2168/2168336.png'alt='twitter' className='logos'/>
        <img src='https://cdn-icons-png.flaticon.com/128/6244/6244710.png'alt='gmail' className='logos'/>
      </div>
    </header>
  );
};

export default Header;
