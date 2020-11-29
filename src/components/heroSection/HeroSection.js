import React from 'react';
import { Container } from 'react-bootstrap';
import './HeroSection.css';


const HeroSection = ({ profileImage }) => {
  return (
    <section className='hero'>
      <Container>
        <div className='hero-body'>
            <div>
              <h1 className='title'><strong>Full Stack Developer </strong></h1>
              <h4 className='subtitle'> I build web apps and software. And I love what I do. </h4>
            </div>
            <img className='profile-avatar rounded-circle' alt='profile' src={profileImage} />
        </div>
      </Container>
    </section>
  );
}


export default HeroSection;
