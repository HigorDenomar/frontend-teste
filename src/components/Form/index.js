import React from 'react';

import { Container } from './styles';

function Form() {
  return (
    <Container>
      <h3>Contact Us</h3>
      <input
        type="text"
        placeholder="Your Name"
      />
      <input
        type="email"
        placeholder="Your Email"
      />

      <textarea
        placeholder="Your Message"
      />

      <button>Send</button>
    </Container>
  );
}

export default Form;