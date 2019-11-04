import React from 'react';
import DynamicLink from './DynamicLink';
import SocialLinks from 'data/social-links.json';

import LogoWhite from 'images/logo-white.jsx';
import FooterLeaves1 from 'images/svg/footer-leaves-1';
import FooterLeaves2 from 'images/svg/footer-leaves-2';

const Footer = () => (
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
      <DynamicLink className="footer__coc-link" to="/CodeOfConduct">
        Code of Conduct
      </DynamicLink>
    </div>
  </div>
);

export default Footer;
