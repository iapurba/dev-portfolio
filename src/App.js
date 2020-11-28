import './App.css';
import Navigation from './components/navigation/Navigation';
import HeroSection from './components/heroSection/HeroSection';
import About from './components/about/About';
import SkillSet from './components/skillSet/SkillSet';
import Project from './components/project/Project';
// import Resume from './components/resume/Resume';
import CallToAction from './components/callToAction/CallToAction';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="App">
      <Navigation />
      <HeroSection />
      <About />
      <SkillSet />
      <Project />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
