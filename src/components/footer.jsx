import React from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

class Footer extends React.Component {
  render() {
    const mailchimpUrl = 'todo mailchimp url';
    const cocUrl = 'todo code of conduct url';
    return (
      <div className="dark-background footer">
        <div className="row">
          <div className="offset-sm-2 col-sm-2 center">
            <img
              className="logo-small"
              src="https://hackbeanpot.com/img/solid_logo.png"
            />
          </div>
          <div className="col-sm-3 center-h-v">
            <span>
              <h3>Stay Connected</h3>
              <MailchimpSubscribe url={mailchimpUrl} />
            </span>
          </div>
          <div className="col-sm-3 center-h-v">
            <span>
              <img
                className="icon-small"
                src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Ski_trail_rating_symbol-green_circle.svg"
              />
              <img
                className="icon-small"
                src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Ski_trail_rating_symbol-green_circle.svg"
              />
              <img
                className="icon-small"
                src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Ski_trail_rating_symbol-green_circle.svg"
              />
              <img
                className="icon-small"
                src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Ski_trail_rating_symbol-green_circle.svg"
              />
            </span>
          </div>
        </div>
        <div className="center-text">
          <p>
            HackBeanpot, Inc. is a registered 501(c)(3) organization.
            <a href="cocUrl">Code of Conduct</a>
          </p>
        </div>
      </div>
    );
  }
}

export default Footer;
