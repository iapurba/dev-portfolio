import React from 'react';
import './SkillCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faServer, faCode } from '@fortawesome/free-solid-svg-icons'


const SkillCard = ({ icon, title, description, languages, tools }) => {
  return (
    <div className='box'>
      <FontAwesomeIcon className='skill-icon' icon={icon}/>
      <div className='box-child'>
        <h3 className='title'><strong>{title}</strong></h3>
        <p>{description}</p>
      </div>
      <div className='box-child'>
        <p className='title-light'><strong>Languages</strong></p>
        <p>{languages}</p>
      </div>
      <div className='box-child'>
        <p className='title-light'><strong>Dev tools</strong></p>
        <p>{tools}</p>
      </div>
    </div>
  )
}

export default SkillCard;
