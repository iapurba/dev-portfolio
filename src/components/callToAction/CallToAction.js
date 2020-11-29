import React from 'react';
import { Container } from 'react-bootstrap';
import './CallToAction.css';

const CallToAction = () => {
  return (
    <section className='call-to-action' id='call-to-action'>
      <Container>
        <div className='call-to-action-box shadow'>
        <div className='level'>
          <div className='level-item'>
            <h2>Start a project </h2>
          </div>
          <div className='level-item'>
            <p>Interested in working together? We should queue up a chat. I’ll buy the coffee.</p>
          </div>
          <div className='level-item'>
            <h4>iamapurbax@gmail.com</h4>
            <h4>+91 9051555135</h4>
          </div>
        </div>
        </div>
      </Container>
    </section>
  )
}

export default CallToAction;
