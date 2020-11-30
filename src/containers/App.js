import './App.css';
import Navigation from '../components/navigation/Navigation';
import HeroSection from '../components/heroSection/HeroSection';
import About from '../components/about/About';
import SkillCardList from '../components/skillCardList/SkillCardList';
import ProjectCardList from '../components/projectCardList/ProjectCardList';
import CallToAction from '../components/callToAction/CallToAction';
import Footer from '../components/footer/Footer';

import profleImage from '../assets/profileImage.jpg';
import brandLogo from '../assets/brandLogo2.png';

function App() {
  return (
    <div className="App" id='App'>
      <Navigation />
      <HeroSection profileImage={profleImage} />
      <About />
      <SkillCardList />
      <ProjectCardList />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
