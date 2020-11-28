import React from 'react';
import './ProjectCard.css';


const ProjectCard = ({ name, description, url, sourceCode }) => {
  return (
    <div className='project-card shadow'>
      <div className='card-body'>
        <h3 className='title'>{name}</h3>
        <p className='card-text'>
          {description}
        </p>
        <div className='project-links'>
          <a href={url} >View Live</a>
          <a href={sourceCode} >Source Code</a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard;
