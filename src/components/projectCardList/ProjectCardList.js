import React from 'react';
import ProjectCard from '../projectCard/ProjectCard';
import { Container } from 'react-bootstrap';
import './ProjectCardList.css'

const projects = [
  {
    name: "RoboFriends",
    description: "Search your favourite robots.I promose you will love this.",
    url: "https://iapurba.github.io/robofriends/",
    sourceCode: "https://github.com/iapurba/robofriends"
  },
  {
    name: "Face Detection Brain",
    description: "This magic brain helps to detect faces on picture. Give it a try.",
    url: "https://facedetectingbrain.herokuapp.com/",
    sourceCode: "https://github.com/iapurba/face-detection-brain"
  },
  {
    name: "Quotes Generator",
    description: "Generates random quotes using API. You can also tweet them if you like.",
    url: "https://iapurba.github.io/quote-generator/",
    sourceCode: "https://github.com/iapurba/quote-generator"
  },
]

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
    <section className='projects'>
      <Container>
        <h1 className='title'><strong>My Recent Proects </strong></h1>
        <p className='subtitle'>Here are my few web projects I have worked on.</p>
        <div className='card-list'>
          {cardList}
        </div>
      </Container>
    </section>
  )
}

export default ProjectCardList;
