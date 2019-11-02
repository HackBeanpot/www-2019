import React, { Fragment } from 'react';

import SponsorLevels from 'pages/sponsors/components/sponsor-levels';
import Sponsors2020 from 'components/sponsors-2020';
import Sponsors2019 from 'components/sponsors-2019';

import Circuit1 from 'images/circuit-1';
import Circuit2 from 'images/circuit-2';
import Circuit3 from 'images/circuit-3';
import SponsorBlob1 from 'images/sponsor-blob-1';
import SponsorBlob2 from 'images/sponsor-blob-2';
import SponsorBlob3 from 'images/sponsor-blob-3';

import MainContent from 'data/sponsor-main.json';
import LevelContent from 'data/sponsor-level-content.json';

class SponsorsPage extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="sponsorship">
          <div className="sponsor-topper px-3">
            <div className="container sponsor-welcome">
              <div className="sponsor-title">{MainContent.title}</div>
              <div className="sponsor-cta col-md-8">{MainContent.cta}</div>
              <div className="sponsor-cta col-md-8">
                <strong>{MainContent.ps}</strong>
              </div>
              <a
                href="mailto:team@hackbeanpot.com"
                role="button"
                className="sponsor__cta"
              >
                Get in touch
              </a>
            </div>
          </div>

          <div className="sponsor-perks">
            <div className="container sponsor-perks">
              <div className="sponsor-section-header">{MainContent.perks}</div>
              <div className="sponsor-perk-cta">{MainContent.perksCta}</div>
              <div className="sponsor-kits-title">The 3 Kits</div> 
              <SponsorLevels content={LevelContent} />
              <div className="center-text faq-button-title">
                Interested in learning about our full sponsorship packet?
                <br />
                <br />
                <a
                  href="mailto:team@hackbeanpot.com"
                  role="button"
                  className="btn yellow-btn lg-btn"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>

          <div className="sponsor-listing">
            <div className="container">
              <section className="sponsors-section container">
                <p className="sponsor-title">2019 Sponsors</p>
                <Sponsors2019 />
              </section>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default SponsorsPage;
