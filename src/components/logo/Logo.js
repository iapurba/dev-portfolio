import React from 'react';
import './Logo.css';
import logo from '../../assets/brandLogo2.png';

const Logo = () => {
  return (
    <div className='navbar-brand'>
      <a href='/'>
        <img alt='Apurba Panja Logo' src={logo} />
      </a>
    </div>
  );
}


export default Logo;
