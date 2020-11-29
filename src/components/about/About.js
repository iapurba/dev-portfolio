import React from 'react';
import './About.css';
import { Container } from 'react-bootstrap';


const About = () => {
  return (
    <section className='about is-colored'>
      <Container>
        <div className='about-body'>
          <h2 className='title'><strong>Hi there, I'm Apurba. Nice to meet you.</strong></h2>
          <p className='subtitle'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.

          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.</p>
        </div>
      </Container>
    </section>
  )
}


export default About;
