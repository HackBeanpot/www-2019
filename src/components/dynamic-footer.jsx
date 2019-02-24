import React from 'react';
import InstagramIcon from 'mdi-react/InstagramIcon';
import FacebookBoxIcon from 'mdi-react/FacebookBoxIcon';
import TwitterBoxIcon from 'mdi-react/TwitterBoxIcon';
import LinkedinBoxIcon from 'mdi-react/LinkedinBoxIcon';

const DynamicFooter = props => (
  <div className={'footer ' + props.firstBackgroundColor + '-background'}>
    <div className="row">
      <div className="offset-lg-3 col-lg-3 center-h-v">
        <span>
          <h3>Stay up to date!</h3>
          <a href="https://www.instagram.com/hackbeanpot" target="blank">
            <InstagramIcon className="icon-small" />
          </a>
          <a href="https://www.facebook.com/hackbeanpot" target="_blank">
            <FacebookBoxIcon className="icon-small" />
          </a>
          <a href="https://twitter.com/hackbeanpot" target="_blank">
            <TwitterBoxIcon className="icon-small" />
          </a>
          <a
            href="https://www.linkedin.com/company/hackbeanpot-inc/"
            target="_blank"
          >
            <LinkedinBoxIcon className="icon-small" />
          </a>
        </span>
      </div>

      <div className="footer-cta col-lg-4 center-h-v">
        <a
          href="http://eepurl.com/dFx_Cf"
          target="blank"
          role="button"
          className="btn yellow-btn lg-btn"
        >
          Join our mailing list!
        </a>
      </div>
    </div>
  </div>
);

DynamicFooter.defaultProps = {
  firstBackgroundColor: 'light-blue'
};

export default DynamicFooter;
