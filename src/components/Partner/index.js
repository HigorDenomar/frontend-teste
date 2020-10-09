import React from 'react';

import {
  Container
} from './styles';

export default function Partner({ client, logo, description }) {
  return (
    <Container>
      <h5>{ client }</h5>
      <img src={ logo } alt="Logo" />
      <p>{ description }</p>
    </Container>
  );
}