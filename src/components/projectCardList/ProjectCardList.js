import React from 'react';
import ProjectCard from '../projectCard/ProjectCard';
import { Container } from 'react-bootstrap';
import './ProjectCardList.css'


const ProjectCardList = () => {
  return (
    <div className='card-list'>
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>
  )
}

export default ProjectCardList;
