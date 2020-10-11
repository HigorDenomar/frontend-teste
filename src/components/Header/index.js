import React from 'react';

import logoImg from '../../assets/images/logo.svg';

import NavBar from '../NavBar';

import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <img src={logoImg} alt="Figma Land" />

      <NavBar />
      
    </Container>
  );
}