import React from 'react';
import ProjectCard from '../projectCard/ProjectCard';
import './ProjectCardList.css'

const projects = [
  {
    name: "RoboFriends",
    description: "Search your favourite robots.I promose you will love this.",
    url: "https://iapurba.github.io/robofriends/",
    sourceCode: "https://github.com/iapurba/robofriends"
  },
  {
    name: "Smart Brain",
    description: "This magic brain detect faces on picture. Give it a try.",
    url: "https://facedetectingbrain.herokuapp.com/",
    sourceCode: "https://github.com/iapurba/face-detection-brain"
  },
  {
    name: "RoboFriends",
    description: "Search your favourite robots",
    url: "",
    sourceCode: ""
  },
  {
    name: "RoboFriends",
    description: "Search your favourite robots",
    url: "",
    sourceCode: ""
  },
  {
    name: "RoboFriends",
    description: "Search your favourite robots",
    url: "",
    sourceCode: ""
  },
  {
    name: "RoboFriends",
    description: "Search your favourite robots",
    url: "",
    sourceCode: ""
  },
]

const ProjectCardList = (projects) => {
  console.log('projects',projects);
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
