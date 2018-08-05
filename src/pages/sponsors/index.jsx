import React, { Fragment } from 'react';

import SponsorLevel from 'pages/sponsors/components/sponsor-level';
import BaseLevel from 'pages/sponsors/components/base-level';

class SponsorsPage extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="light-background">
          <div className="container sponsor-welcome">
            <div className="sponsor-title">Sponsor HackBeanpot</div>
            <div className="sponsor-cta col-md-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <button className="sponsor-button">Get In Touch</button>
          </div>
        </div>

        <div className="dark-background">
          <div className="container sponsor-perks">
            <div className="sponsor-title">Sponsorship Levels</div>
            <BaseLevel />
            <div className="row">
              <SponsorLevel />
              <SponsorLevel />
              <SponsorLevel />
            </div>
          </div>
        </div>

        <div className="light-background">
          <div className="container sponsors">
            <div className="sponsor-title">Past Sponsors</div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default SponsorsPage;
