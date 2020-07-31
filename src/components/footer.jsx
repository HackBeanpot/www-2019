import React, { useState } from 'react';
import DynamicLink from './dynamic-link';
import SocialLinks from 'data/social-links.json';

import LogoWhite from 'images/logo-white.jsx';
import FooterLeaves1 from 'images/svg/footer-leaves-1';
import FooterLeaves2 from 'images/svg/footer-leaves-2';

import addToMailchimp from 'gatsby-plugin-mailchimp';

const Footer = () => {
  // state stuff goes here 
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };


  const handleEmailChange = (e) => {
    e.preventDefault();
    console.log(e.target.value) //for testing
    setEmail(e.target.value)
    }
      


  return(
 <div className="footer">
    <span className="footer__leaves-left">
      <FooterLeaves1 />
    </span>
    <span className="footer__leaves-right">
      <FooterLeaves2 />
    </span>
    <div className="footer__logo">
      <LogoWhite />
    </div>
    <div className="footer__content">
      <ul className="footer__social">
        {SocialLinks.map((item, index) => {
          return (
            <li key={`social-link-${index}`}>
              <DynamicLink to={item.link} className="footer__social-link">
                <i className={`mdi mdi-36px ${item.iconClass}`} />
              </DynamicLink>
            </li>
          );
        })}
      </ul>
      <p>HackBeanpot, Inc. is a registered 501(c)(3) organization.&nbsp;</p>
      <DynamicLink className="footer__coc-link" to="/code-of-conduct">
        Code of Conduct
      </DynamicLink>
    </div>
    <div>
    <p>Sign up for our newsletter</p>

    <form onSubmit={handleSubmit}>
      <div>
        <input
          placeholder="Email address"
          name="email"
          type="text"
          onChange={handleEmailChange}
        />

    <div class="clear footer-cta-padding">
    <button className="footer__cta" type="submit">Subscribe</button>

    </div>
      </div>
    </form>
    </div>
  </div>
  
  )
  }

  export default Footer;
  
