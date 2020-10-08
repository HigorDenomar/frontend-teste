import React from 'react';
import Header from '../../components/Header';

import heroImg from '../../assets/images/hero.svg';

import {
  Container,
  Hero
} from './styles';

export default function Landing() {
  return (
    <>
      <Header />
      
      <Hero>
        <div className="wrapper">
          <img src={heroImg} alt="" />

          <div className="content">
            <h1>We focus on ergonomics</h1>
            <p>
              Most calendars are designed for teams.
              Slate is designed for freelancers
            </p>

            <button>Try For Free</button>
          </div>
        </div>

        <div class="wave">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
          </svg>
        </div>
      </Hero>

      <Container>

      </Container>
    </>
  );
}