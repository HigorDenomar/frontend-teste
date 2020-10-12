import React, { useState } from 'react';

import { Container } from './styles';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmitForm(event) {
    event.preventDefault();

    alert(`Sorry ${name}, this is not a functional form,\nsite still under construction...`);

    setName('');
    setEmail('');
    setMessage('');
  }
  return (
    <Container onSubmit={event => handleSubmitForm(event)}>
      <h3>Contact Us</h3>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />

      <textarea
        placeholder="Your Message"
        value={message}
        onChange={e => setMessage(e.target.value)}
      />

      <button>Send</button>
    </Container>
  );
}

export default Form;