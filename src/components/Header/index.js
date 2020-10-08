import React from 'react';

import logoImg from '../../assets/images/logo.svg';

import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <img src={logoImg} alt="Figma Land"/>

      <div>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Product</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>

        <div id="subscribe">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
          />

          <button>Subscribe</button>
        </div>
      </div>
    </Container>
  );
}