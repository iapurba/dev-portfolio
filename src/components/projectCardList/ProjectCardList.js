import React from 'react';
import ProjectCard from '../projectCard/ProjectCard';
import { Container } from 'react-bootstrap';
import './ProjectCardList.css'
import { projects } from '../../assets/projectData';

const ProjectCardList = () => {
  const cardList = projects.map((project, i) => {
    return (
      <ProjectCard
        key={i}
        name={project.name}
        description={project.description}
        url={project.url}
        sourceCode={project.sourceCode}
      />
    )
  })
  return (
    <section className='projects' id='projects'>
      <Container>
        <h1 className='title'><strong>My Recent Proects </strong></h1>
        <p className='subtitle'>
          Here are my few recent projects I have worked on.
        </p>
        <div className='card-list'>
          {cardList}
        </div>
        <a className='more-button'
          href='https://github.com/iapurba?tab=repositories'
          target='_blank'
        >
          <strong>See more on Github</strong>
        </a>
      </Container>
    </section>
  )
}

export default ProjectCardList;
