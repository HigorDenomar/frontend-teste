import React from 'react';

import { Container } from './styles';

export default function Feature({ icon, title, description }) {
  return (
    <Container>
      <div className="header">
        <img src={icon} alt="Icon"/>
        <h3>{ title }</h3>
      </div>

      <p>{ description }</p>
    </Container>
  );
}