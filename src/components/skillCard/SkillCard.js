import React from 'react';
import './SkillCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faServer, faCode } from '@fortawesome/free-solid-svg-icons'


const SkillCard = () => {
  return (
    <div className='box'>
      <FontAwesomeIcon className='skill-icon' icon={faCode}/>
      <div className='box-child'>
        <h3 className='title'><strong>Front-end</strong></h3>
        <p>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
      </div>
      <div className='box-child'>
        <p className='title-light'><strong>Languages</strong></p>
        <p>HTML, CSS, JavaScript</p>
      </div>
      <div className='box-child'>
        <p className='title-light'><strong>Dev tools</strong></p>
        <p>React, Bootstrap, Tachyons, VSCode, Sublime, Atom</p>
      </div>
    </div>
  )
}

export default SkillCard;
