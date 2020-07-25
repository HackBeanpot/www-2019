import React from 'react';
import DynamicLink from './dynamic-link';
import SocialLinks from 'data/social-links.json';

import LogoWhite from 'images/logo-white.jsx';
import FooterLeaves1 from 'images/svg/footer-leaves-1';
import FooterLeaves2 from 'images/svg/footer-leaves-2';

import addToMailchimp from 'gatsby-plugin-mailchimp';

const Footer = () => {
  // state stuff goes here 
  state = {
    name: null,
    email: null,
}

_handleChange = e => {
  console.log({
      [`${e.target.name}`]: e.target.value,
  })
  this.setState({
      [`${e.target.name}`]: e.target.value,
  })
}

_handleSubmit = e => {
  e.preventDefault()

  console.log('submit', this.state)
  addToMailchimp(this.state.email, this.state)
  .then(({ msg, result }) => {
      console.log('msg', `${result}: ${msg}`)

      if (result !== 'success') {
          throw msg
      }
      alert(msg)
  })
  .catch(err => {
      console.log('err', err)
      alert(err)
  })

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
    <form onSubmit={this._handleSubmit}>
                        <input
                            type="text"
                            onChange={this._handleChange}
                            placeholder="name"
                            name="name"
                        />
                        <input
                            type="email"
                            onChange={this._handleChange}
                            placeholder="email"
                            name="email"
                        />
                        <br />
                        <br />

                        <input type="submit" />
                    </form>
    </div>
  </div>
  
  )
  }

  export default Footer;
  
