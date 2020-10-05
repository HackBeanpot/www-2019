import React, { useState } from 'react';
import addToMailChimp from 'gatsby-plugin-mailchimp';

import DynamicLink from './dynamic-link';
import SocialLinks from 'data/social-links.json';

import LogoWhite from 'images/logo-white.jsx';
import FooterLeaves1 from 'images/svg/footer-leaves-1';
import FooterLeaves2 from 'images/svg/footer-leaves-2';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const { result, msg } = await addToMailChimp(email);

      if (result !== 'success') {
        throw msg; //error with subscription from our end or plugin
      }

      setEmail('');
      setMessage('Thank you for subscribing!');
    } catch (err) {
      if (err.includes('already subscribed')) {
        setMessage("You're already subscribed!");
      } else {
        setMessage('Please enter a valid email.');
      }
    }
  };

  const handleEmailChange = e => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  return (
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
        <form onSubmit={handleSubmit} className="footer-form">
          <div>
            <div className="footer-form-heading">Sign up for our newsletter</div>
            <input
              placeholder="Email address"
              name="email"
              type="text"
              onChange={handleEmailChange}
              className="footer-form-input"
            />
            <div className="footer-form-msg">{message}</div>

            <div class="clear footer-cta-padding">
              <button className="footer__cta" type="submit">
                Subscribe
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Footer;
