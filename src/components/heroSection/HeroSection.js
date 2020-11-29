import React from 'react';
import profileImage from './profileImage.jpg';
import './HeroSection.css';
import { Container } from 'react-bootstrap';


const HeroSection = () => {
  return (
    <section className='hero'>
      <Container>
        <div className='hero-body'>
            <div>
              <h1 className='title'><strong>Full Stack Developer </strong></h1>
              <h3 className='subtitle'> I build complete website and I love what I do. </h3>
            </div>
            <img className='profile-avatar rounded-circle' alt='profile' src={profileImage} />
        </div>
        <div className='hero-footer'>
        </div>
      </Container>
    </section>
  );
}


export default HeroSection;
