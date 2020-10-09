import React from 'react';
import Header from '../../components/Header';
import Feature from '../../components/Feature';
import Partner from '../../components/Partner';
import PriceItem from '../../components/PriceItem';
import Form from '../../components/Form';
import Contact from '../../components/Contact';
import Map from '../../components/Map';

import heroImg from '../../assets/images/hero.svg';
import productsIcon from '../../assets/images/products-icon.svg';
import organizeIcon from '../../assets/images/fastest-organize-icon.svg';
import workIcon from '../../assets/images/work-better-icon.svg';
import macbookIcon from '../../assets/images/macbook.svg';
import airbnbIcon from '../../assets/images/logo-airbnb.svg';
import androidIcon from '../../assets/images/logo-android.svg';
import apiaryIcon from '../../assets/images/logo-apiary.svg';
import appleIcon from '../../assets/images/logo-apple.svg';
import basecampIcon from '../../assets/images/logo-basecamp.svg';
import dropboxIcon from '../../assets/images/dropbox-icon.svg';
import avatarImg from '../../assets/images/avatar.svg';

import {
  Hero,
  Features,
  TryFree,
  Subscribe,
  Partners,
  Testimonials,
  Pricing,
  ContactSection,
  Footer,
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

        <div className="wave">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
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
        <h3>At your fingertips</h3>
        <h2>Lightning fast prototyping</h2>

        <h3>Subscribe to our Newsletter</h3>
        <p>Available exclusivery on Figmaland</p>

        <input type="email" placeholder="Your Email" />
        <button>Subscribe</button>
      </Subscribe>
    
      <Partners>
        <h2>Partners</h2>
        <h4>Most calendars are designed for teams. Slate is designed for freelancers</h4>

        <div className="content">
          <Partner
            client="Client Name"
            description="Slate helps you see how many more days you need to work to reach your financial goal for the month and year."
            logo={apiaryIcon}
          />
          <Partner
            client="Client Name"
            description="Slate helps you see how many more days you need to work to reach your financial goal for the month and year."
            logo={androidIcon}
          />
          <Partner
            client="Client Name"
            description="Slate helps you see how many more days you need to work to reach your financial goal for the month and year."
            logo={basecampIcon}
          />
          <Partner
            client="Client Name"
            description="Slate helps you see how many more days you need to work to reach your financial goal for the month and year."
            logo={basecampIcon}
          />
          <Partner
            client="Client Name"
            description="Slate helps you see how many more days you need to work to reach your financial goal for the month and year."
            logo={airbnbIcon}
          />
          <Partner
            client="Client Name"
            description="Slate helps you see how many more days you need to work to reach your financial goal for the month and year."
            logo={appleIcon}
          />
        </div>

        <button>Try For Free</button>
      </Partners>
    
      <Testimonials>
        <h2>Testimonials</h2>
        <img src={dropboxIcon} alt="Dropbox" />

        <h4>Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.</h4>

        <div className="people-container">
          <img src={avatarImg} alt="" />
          <h5>Organize across</h5>
          <a href="#">Ui designer</a>
        </div>

        <button>More Testimonials</button>
      </Testimonials>
    
      <Pricing>
        <h2>Pricing</h2>

        <h4>Most calendars are designed for teams. Slate is designed for freelancers</h4>

        <div className="prices-container">
          <PriceItem
            title="Free"
            description="Organize across all apps by hand"
            price="0"
          />
          <PriceItem
            title="STANDARD"
            description="Organize across all apps by hand"
            price="10"
          />
          <PriceItem
            main
            title="BUSINESS"
            description="Organize across all apps by hand"
            price="99"
          />
        </div>
      </Pricing>
    
      <ContactSection>
        <h2>Contact Us</h2>
        <h4>Most calendars are designed for teams. Slate is designed for freelancers</h4>

        <div className="content">
          <Form />

          <Contact dark />
        </div>
      </ContactSection>

      <Footer>
        <div className="pages">
          <h3>Pages</h3>

          <ul>
            <li><a href="#">Eleanor Edwards</a></li>
            <li><a href="#">Ted Robertson</a></li>
            <li><a href="#">Annette Russell</a></li>
            <li><a href="#">Jennie Mckinney</a></li>
            <li><a href="#">Gloria Richards</a></li>
          </ul>
        </div>

        <Map />

        <Contact />
      </Footer>
    </>
  );
}