import React, { Fragment } from 'react';
import DynamicFooter from 'components/dynamic-footer';

import SponsorLevels from 'pages/sponsors/components/sponsor-levels';
import Sponsors2019 from 'components/sponsors-2019';

import Circuit1 from 'images/circuit-1';
import Circuit2 from 'images/circuit-2';
import Circuit3 from 'images/circuit-3';
import SponsorBlob3 from 'images/sponsor-blob-3';
import SponsorVines from 'images/sponsor-vines';

import MainContent from 'data/sponsor-main.json';
import LevelContent from 'data/sponsor-level-content.json';


class SponsorsPage extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="sponsorship">
          <div className="light-background">
            <SponsorVines />
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
                  className="btn yellow-btn lg-btn"
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
                <p className="sponsors-title">2019 Sponsors</p>
                <Sponsors2019 />
              </section>
            </div>
            <SponsorBlob3 />
          </div>
        </div>
        <DynamicFooter firstBackgroundColor="teal" />
      </Fragment>
    );
  }
}

export default SponsorsPage;
