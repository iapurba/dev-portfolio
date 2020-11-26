import React from 'react';
import './Logo.css'
import logo from './logo.png';


const Logo = () => {
  return (
    <div className='navbar-brand'>
      <a href='#0'>
        <img alt='Apurba Panja Logo' src={logo} />
      </a>
    </div>
  );
}


export default Logo;
