import React from 'react';
import { Container } from 'react-bootstrap';
import SkillCard from '../skillCard/SkillCard';
import './SkillCardList.css';
import { skills } from '../../assets/skillData';

const SkillCardList = () => {
  const skillList = skills.map((skill, i) => {
    return (
      <SkillCard
        key={i}
        icon={skill.icon}
        title={skill.title}
        description={skill.description}
        languages={skill.languages}
        software={skill.software}
        tools={skill.tools}
      />
    )
  })
  return (
    <section className='skills'>
      <Container>
        <div className='skill-body shadow-sm'>
          <div className='box-parent'>
            {skillList}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default SkillCardList;
