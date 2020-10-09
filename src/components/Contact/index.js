import React from 'react';

import locationIcon from '../../assets/images/location-icon.svg';
import phoneIcon from '../../assets/images/phone-icon.svg';
import mailIcon from '../../assets/images/mail-icon.svg';
import twitterIcon from '../../assets/images/twitter-icon.svg';
import facebookIcon from '../../assets/images/facebook-icon.svg';
import linkedinIcon from '../../assets/images/linkedin-icon.svg';

import {
  Container,
  Form
} from './styles';

export default function Contact() {
  return (
    <Container>
      <h2>Contact Us</h2>
      <h4>Most calendars are designed for teams. Slate is designed for freelancers</h4>

      <div className="content">
        <Form>
          <h3>Contact Us</h3>
          <input
            type="text"
            placeholder="Your Name"
          />
          <input
            type="email"
            placeholder="Your Email"
          />

          <textarea
            placeholder="Your Message"
          />

          <button>Send</button>
        </Form>

        <div className="contacts">
          <div className="contact-item">
            <img src={locationIcon} alt="" />
            <h5>6386 Spring St undefined Anchorage, Georgia 12473 United States</h5>
          </div>
          <div className="contact-item">
            <img src={phoneIcon} alt="" />
            <h5>(843) 555-0130</h5>
          </div>
          <div className="contact-item">
            <img src={mailIcon} alt="" />
            <h5>willie.jennings@example.com</h5>
          </div>

          <div className="networks">
            <img src={twitterIcon} alt="" />
            <img src={facebookIcon} alt="" />
            <img src={linkedinIcon} alt="" />
          </div>
        </div>
      </div>
    </Container>
  );
}