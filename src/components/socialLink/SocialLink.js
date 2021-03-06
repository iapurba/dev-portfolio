import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SocialLink.css';
import { faLinkedinIn, faFacebookF, faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';


const SocialLink = () => {
  return (
    <div className='social-links'>
      <a href='https://www.linkedin.com/in/apurba-panja-bb88ab1a5/' target='_blank'>
        <FontAwesomeIcon className='social-icon' icon={faLinkedinIn}/>
      </a>
      <a href='https://github.com/iapurba' target='_blank'>
        <FontAwesomeIcon className='social-icon' icon={faGithub} />
      </a>
      <a href='https://www.facebook.com/apurbapanja30/' target='_blank'>
        <FontAwesomeIcon className='social-icon' icon={faFacebookF} />
      </a>
      <a href='https://twitter.com/apurba_panja' target='_blank'>
        <FontAwesomeIcon className='social-icon' icon={faTwitter} />
      </a>
      <a href='https://www.instagram.com/iam_apurba_/' target='_blank'>
        <FontAwesomeIcon className='social-icon' icon={faInstagram} />
      </a>
    </div>
  );
}


export default SocialLink;
