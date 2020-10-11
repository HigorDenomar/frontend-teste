import React, { useState } from 'react';

import {
  Container,
  Nav,
} from './styles';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggleMenu() {
    setIsOpen(!isOpen);
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

        <div id="subscribe">
          <input
            type="email"
            placeholder="Your Email"
          />

          <button>Subscribe</button>
        </div>
      </Nav>
    </Container>
  );
}