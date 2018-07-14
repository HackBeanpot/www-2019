import React, { Fragment } from 'react';

import SponsorLevel from 'pages/sponsors/components/sponsor-level';

class SponsorsPage extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="sponsor-header">
          <div className="sponsor-title">Sponsor HackBeanpot</div>
        </div>

        <div className="sponsor-body">
          <div className="sponsor-cta">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
          culpa qui officia deserunt mollit anim id est laborum.
          <br/>
          <button className="sponsor-button">Alert Me</button>
          </div>

          <hr/>

          <div className="sponsor-title">Sponsorship Levels</div>
          <div className="row">
            <SponsorLevel />
            <SponsorLevel />
            <SponsorLevel />
          </div>

          <hr/>
          
          Sponsorship images here
        
        </div>
      </Fragment>
    );
  }
}

export default SponsorsPage;
