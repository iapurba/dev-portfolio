import Logo from '../logo/Logo';
import './Navigation.css';
import { Container } from 'react-bootstrap';

const Navigation = () => {
  return (
    <nav className='navbar'>
      <Container id='nav-container'>
        <div className='navbar-brand'>
          <Logo />
        </div>
        <div className='navbar-menu'>
          <a className='navbar-item' href='#projects'>Projects</a>
          <a className='navbar-item' href='#call-to-action'>Contact</a>
        </div>
      </Container>
      </nav>
  );
}

export default Navigation;
