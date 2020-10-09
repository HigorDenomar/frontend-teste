import React from 'react';

import {
  Container,
} from './styles';

export default function PriceItem({ title, description, price, main }) {
  return (
    <Container main={ main } >
      <h3>{ title }</h3>
      <h5>{ description }</h5>

      <div className="price">
        <h1>{ price }</h1>
        <h3>$</h3>
        <h5>Per Month</h5>
      </div>

      <button>Order Now</button>
    </Container>
  );
}