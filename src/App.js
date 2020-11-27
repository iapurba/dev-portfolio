import './App.css';
import Navigation from './components/navigation/Navigation';
import HeroSection from './components/heroSection/HeroSection';
import About from './components/about/About';
import SkillSet from './components/skillSet/SkillSet';
import Project from './components/project/Project';
import CallToAction from './components/callToAction/CallToAction';
import {Container, Row, Col } from 'react-bootstrap';
import Logo from './components/logo/Logo';

function App() {
  return (
    <div className="App">
      <Navigation />
      <HeroSection />
      <About />
      <SkillSet />
      <Project />
      <CallToAction />
      <footer className='is-colored'>
      <Logo/>
      <Row className='justify-content-md-center'>
        <Col md={4}>
          <h3 style={{color:'#ffffff'}}>Living, learning, & leveling up one day at a time.</h3>
        </Col>
      </Row>
      </footer>
    </div>
  );
}

export default App;
