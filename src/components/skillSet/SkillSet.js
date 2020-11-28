import React from 'react';
import { Container } from 'react-bootstrap';
import SkillCard from '../skillCard/SkillCard';
import './SkillSet.css';

const SkillSet = () => {
  return (
    <section className='skills'>
      <Container>
        <div className='skill-set shadow-sm'>
          <div className='box-parent'>
            <SkillCard />
            <SkillCard />
            <SkillCard />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default SkillSet;
