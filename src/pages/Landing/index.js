import React from 'react';
import Header from '../../components/Header';
import Feature from '../../components/Feature';

import heroImg from '../../assets/images/hero.svg';
import productsIcon from '../../assets/images/products-icon.svg';
import organizeIcon from '../../assets/images/fastest-organize-icon.svg';
import workIcon from '../../assets/images/work-better-icon.svg';
import macbookIcon from '../../assets/images/macbook.svg';

import {
  Hero,
  Features,
  TryFree,
  Subscribe
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

      <Features>
        <h3>At your fingertips</h3>
        <h2>Features</h2>

        <h4>
          Most calendars are designed for teams.
          Slate is designed for freelancers
        </h4>

        <div className="content">
          <Feature
            icon={productsIcon}
            title="The best products start with Sketch"
            description="Slate helps you see how many more days you need to work to reach your financial goal."
          />
          <Feature
            icon={organizeIcon}
            title="Fastest way to organize"
            description="Slate helps you see how many more days you need to work to reach your financial goal."
          />
          <Feature
            icon={workIcon}
            title="Work better together"
            description="Slate helps you see how many more days you need to work to reach your financial goal."
          />
        </div>
      </Features>
    
      <TryFree>
        <h2>Lightning fast prototyping</h2>
        <h4>Most calendars are designed for teams. Slate is designed for freelancers</h4>

        <button>Try For Free</button>

        <img src={macbookIcon} alt="Macbook" />
      </TryFree>
    
      <Subscribe>
        <h3>Subscribe</h3>
        <h2>Lightning fast prototyping</h2>

        <h3>Subscribe to our Newsletter</h3>
        <p>Available exclusivery on Figmaland</p>

        <input type="email" placeholder="Your Email" />
        <button>Subscribe</button>
      </Subscribe>
    </>
  );
}