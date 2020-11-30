import React from 'react';
import './About.css';
import { Container } from 'react-bootstrap';


const About = () => {
  return (
    <section className='about is-colored'>
      <Container>
        <div className='about-body'>
          <h2 className='title'><strong>Hi there, I'm Apurba. Nice to meet you.</strong></h2>
          <p className='subtitle'>
          Back to school days I remember how I fell in love with web just because of fun. changing fonts or adding new colours brought me immense joy. Since then I have been hooked. Later on every time I use an web app an software one question comes to my mind <i>'How it works?'</i> and that curiosity ultimately drives me to be a developer. Since then I have learned a lot of challenging things from scratch and connected the dots. Now I am confident enough to bring my skills into profession. But I never stop learing still I am strive to do my best.
          </p>
          <p>
          Beyond my profession I love to introduce myself as an autodidact. Reading books, learning different languages, listening to podcast, watching sports are the things I enjoy.
          </p>
        </div>
      </Container>
    </section>
  )
}


export default About;
