import React from 'react';

import locationIcon from '../../assets/images/location-icon.svg';
import phoneIcon from '../../assets/images/phone-icon.svg';
import mailIcon from '../../assets/images/mail-icon.svg';
import twitterIcon from '../../assets/images/twitter-icon.svg';
import facebookIcon from '../../assets/images/facebook-icon.svg';
import linkedinIcon from '../../assets/images/linkedin-icon.svg';

import {
  Container,
} from './styles';

export default function Contact({ dark }) {
  return (
    <Container dark={dark}>
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
    </Container>
  );
}