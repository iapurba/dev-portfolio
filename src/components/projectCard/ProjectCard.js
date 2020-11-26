import React from 'react';
import './ProjectCard.css';
import { Container } from 'react-bootstrap';


const ProjectCard = () => {
  return (
    <div className='project-card shadow-sm'>
      <div className='card-body'>
        <h3 className='title'>Robofriends</h3>
        <p className='card-text'>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </p>
        <div className='project-links'>
          <a href="#">View Live</a>
          <a href="#">Source Code</a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard;
