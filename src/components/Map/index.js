import React from 'react';

import { Container } from './styles';

export default function Map() {
  return (
    <Container
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.7095285434043!2d-43.87235098570333!3d-16.741339051414677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xab53616e2cfedd%3A0x68ceeb2680134138!2sMontes%20Claros%20Shopping!5e0!3m2!1spt-BR!2sbr!4v1602283085021!5m2!1spt-BR!2sbr"
      width="400"
      height="300"
      frameborder="0"
      allowfullscreen=""
      aria-hidden="false"
      tabindex="0"
    />
  );
}