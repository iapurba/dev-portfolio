import React from 'react';
import {Container, Row, Col } from 'react-bootstrap';
import SocialLink from '../socialLink/SocialLink';
import Logo from '../logo/Logo';


const Footer = () => {
  return (
    <footer className='is-colored'>
      <Logo />
      <Row className='justify-content-md-center'>
        <Col md={4}>
          <h3 style={{color:'#ffffff'}}>Living, learning, & leveling up one day at a time.</h3>
        </Col>
      </Row>
      <SocialLink />
      <div className='box-child'>
        <p className='title'>Created by me &#169; 2021 </p>
      </div>
    </footer>
  );
}


export default Footer;
