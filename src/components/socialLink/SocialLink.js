import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SocialLink.css';
import { faLinkedinIn, faFacebookF, faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';


const SocialLink = () => {
  return (
    <div className='social-links'>
      <a href='#0'>
        <FontAwesomeIcon className='social-icon' icon={faLinkedinIn}/>
      </a>
      <a href='#0'>
        <FontAwesomeIcon className='social-icon' icon={faGithub} />
      </a>
      <a href='#0'>
        <FontAwesomeIcon className='social-icon' icon={faFacebookF} />
      </a>
      <a href='#0'>
        <FontAwesomeIcon className='social-icon' icon={faTwitter} />
      </a>
      <a href='#0'>
        <FontAwesomeIcon className='social-icon' icon={faInstagram} />
      </a>
    </div>
  );
}


export default SocialLink;
