import React from 'react';
import './Logo.css'
import brandLogo from './logo.svg';


const Logo = () => {
  return (
    <div className='navbar-brand'>
      <a href='#0'>
        <img alt='Apurba Panja Logo' src={brandLogo} />
      </a>
    </div>
  );
}


export default Logo;
