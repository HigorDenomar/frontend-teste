import React, { useState } from 'react';

import {
  Container,
  Nav,
} from './styles';

export default function NavBar() {
  const [email, setEmail] = useState('');
  const [isOpen, setIsOpen] = useState(true);

  function handleToggleMenu() {
    setIsOpen(!isOpen);
  }

  function handleSubmitForm(event) {
    event.preventDefault();
    
    alert("Sorry, this is not a functional form,\nsite still under construction...");

    setEmail('');
  }

  return (
    <Container opened={ isOpen }>
      <div className="background" onClick={handleToggleMenu} />
      
      {/* burger icon */}
      <div className="toggle" onClick={handleToggleMenu}>
        <div />
        <div />
        <div />
      </div>

      <Nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Product</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

        <form onSubmit={event => handleSubmitForm(event)}>
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <button>Subscribe</button>
        </form>
      </Nav>
    </Container>
  );
}