import React, { Fragment } from 'react';

import SponsorLevels from 'pages/sponsors/components/sponsor-levels';
import SponsorLogos from 'components/sponsor-logos';

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
          <div className="light-background">
            <div className="container sponsor-welcome">
              <div className="sponsor-title">{MainContent.title}</div>
              <div className="sponsor-cta col-md-8">{MainContent.cta}</div>
              <div className="sponsor-cta col-md-8">
                <strong>{MainContent.ps}</strong>
              </div>
              <a
                href="mailto:team@hackbeanpot.com"
                role="button"
                className="yellow-btn lg-btn sponsor-button"
              >
                Get In Touch
              </a>
            </div>
            <Circuit1 />
            <SponsorBlob1 />
            <SponsorBlob2 />
          </div>

          <div className="dark-background">
            <div className="container sponsor-perks">
              <div className="sponsor-section-header">{MainContent.perks}</div>
              <div className="sponsor-perk-cta">{MainContent.perksCta}</div>
              <SponsorLevels content={LevelContent} />
              <div className="center-text faq-button-title">
                Interested in learning about our full sponsorship packet?
                <br />
                <br />
                <a
                  href="mailto:team@hackbeanpot.com"
                  role="button"
                  class="btn yellow-btn lg-btn"
                >
                  Email Us
                </a>
              </div>
            </div>
            <Circuit2 />
            <Circuit3 />
          </div>

          <div className="light-background">
            <div className="container sponsors">
              <section className="sponsors-section container">
                <p className="sponsors-title">2018 Sponsors</p>
                <SponsorLogos />
              </section>
            </div>
            <SponsorBlob3 />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default SponsorsPage;
