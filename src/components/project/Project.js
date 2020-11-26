import React from 'react';
import ProjectCardList from '../projectCardList/ProjectCardList';
import { Container } from 'react-bootstrap';
import './Project.css'


const Project = () => {
  return (
    <section className='projects'>
      <Container>
        <h1 className='title'><strong>My Recent Proects </strong></h1>
        <p className='subtitle'>Here are my few web projects I have worked on.</p>
        <ProjectCardList />
      </Container>
    </section>
  )
}

export default Project;
