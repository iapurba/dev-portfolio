import Logo from '../logo/Logo';
import './Navigation.css';
import { Container } from 'react-bootstrap';

function Navigation() {
  return (
    <nav className='navbar'>
      <Container id='nav-container'>
        <div className='navbar-brand'>
          <Logo />
        </div>
        <div className='navbar-menu'>
          <a className='navbar-item' href='#0'>Projects</a>
          <a className='navbar-item' href='#0'>Resume</a>
        </div>
      </Container>
      </nav>
  );
}

export default Navigation;
