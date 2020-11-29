import React from 'react';
import { Container } from 'react-bootstrap';
import SkillCard from '../skillCard/SkillCard';
import './SkillSet.css';
import { faDatabase, faServer, faLaptopCode } from '@fortawesome/free-solid-svg-icons'

const data = [
  {
    icon: faLaptopCode,
    title: "Front-end",
    description: "I like to code things from scratch, and enjoy bringing ideas to life in the browser.",
    languages: "HTML, CSS, JavaScript",
    tools: "React, Bootstrap, Tachyons, VSCode, Sublime, Atom"
  },
  {
    icon: faServer,
    title: "Back-end",
    description: "I like to code things from scratch, and enjoy bringing ideas to life in the browser.",
    languages: "Python, JavaScript(NodeJs)",
    tools: "Django, NodeJS, Express, Pycharm, Jupiter Notebook, Postman"
  },
  {
    icon: faDatabase,
    title: "Database",
    description: "I like to code things from scratch, and enjoy bringing ideas to life in the browser.",
    languages: "SQL",
    tools: "Postgres, SQLite, KnexJs, Valentina Studio"
  }
]

const SkillSet = () => {
  const skillList = data.map((skill, i) => {
    return (
      <SkillCard
        key={i}
        icon={skill.icon}
        title={skill.title}
        description={skill.description}
        languages={skill.languages}
        tools={skill.tools}
      />
    )
  })
  return (
    <section className='skills'>
      <Container>
        <div className='skill-set shadow-sm'>
          <div className='box-parent'>
            {skillList}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default SkillSet;
