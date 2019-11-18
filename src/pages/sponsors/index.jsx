import React, { Fragment } from 'react';
import Layout from '../../components/layout';

import SponsorLevels from 'pages/sponsors/components/sponsor-levels';
import Sponsors2020 from 'components/sponsors-2020';
import Sponsors2019 from 'components/sponsors-2019';
import SponsorshipVines from 'images/svg/sponsorship-vines';
import SponsorsLeafPattern from 'images/sponsors-leaf-pattern.png';

import MainContent from 'data/sponsor-main.json';
import LevelContent from 'data/sponsor-level-content.json';

export default () => (
  <Layout>
    <SponsorsPage />
  </Layout>
);

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
          <section className="sponsor-perks">
            <div className="container">
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
          <img
            src={SponsorsLeafPattern}
            alt="Animated logo"
            className="sponsors__pattern"
            />
          </section>

          <div className="sponsor-listing">
            <div className="container">
              <section className="sponsors-section container">
                <p className="sponsor-title">2019 Sponsors</p>
                <Sponsors2019 />
              </section>
            </div>
          </div>
          <span className="sponsor-vines"><SponsorshipVines /></span>
        </div>
      </Fragment>
    );
  }
}
