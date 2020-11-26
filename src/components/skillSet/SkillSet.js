import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './SkillSet.css';

const SkillSet = () => {
  return (
    <section className='skills'>
      <Container>
        <div className='skill-set shadow-sm'>
          <div className='box'>
            <h3 className='title'>Front-end</h3>
            <p>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
            <p><strong>Languages</strong></p>
            <p>HTML, CSS, JavaScript</p>
            <p><strong>Dev tools</strong></p>
            <p>React, Bootstrap, Tachyons, VSCode, Sublime, Atom</p>
          </div>
          <div className='box'>
            <h3 className='title'>Back-end</h3>
            <p>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
            <p><strong>Languages</strong></p>
            <p>Python, JavaScript(Nodejs)</p>
            <p><strong>Dev tools</strong></p>
            <p>Djnago, Express, Postman, Git, Github, Pycharm, Spyder, Jupiter Notebook</p>
          </div>
          <div className='box'>
            <h3 className='title'>DBMS</h3>
            <p>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
            <p><strong>Languages</strong></p>
            <p>SQL</p>
            <p><strong>Dev tools</strong></p>
            <p>Postgress, MySQL, SQLite, Valentina Studio</p>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default SkillSet;
