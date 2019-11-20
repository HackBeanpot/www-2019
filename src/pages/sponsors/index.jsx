import React from 'react';
import Layout from '../../components/layout';

import SponsorLevels from 'pages/sponsors/components/sponsor-levels';
import SponsorLevelsMobile from 'pages/sponsors/components/sponsor-levels-mobile';
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
      <div className="sponsors">
        <section className="sponsors-header">
          <span className="sponsors-vines">
            <SponsorshipVines />
          </span>
          <div className="container">
            <h1 className="sponsors-header__title">{MainContent.title}</h1>
            <div className="sponsors-header__description">
              <p>{MainContent.cta}</p>
              <p className="sponsors-header__ps">{MainContent.ps}</p>
            </div>

            <a
              href="mailto:team@hackbeanpot.com"
              role="button"
              className="sponsors__cta"
            >
              Get in touch
            </a>
          </div>
        </section>
        <section className="sponsor-perks">
          <div className="container">
            <h2 className="sponsor-perks__title">{MainContent.perks}</h2>
            <div className="sponsor-perks__description">
              {MainContent.perksCta}
            </div>
            <div className="sponsor-perks__subtitle">The 3 Kits</div>
            <SponsorLevels content={LevelContent} />
            <SponsorLevelsMobile content={LevelContent} />
            <div className="sponsor-perks__cta-group">
              <p className="sponsor-perks__cta-label">
                Interested in receiving our full sponsorship package?
              </p>
              <a
                href="mailto:team@hackbeanpot.com"
                role="button"
                className="sponsor-perks__cta"
              >
                Email Us
              </a>
            </div>
          </div>
          <img
            src={SponsorsLeafPattern}
            alt="Background leaf pattern"
            className="sponsor-perks__pattern"
          />
        </section>

        <div className="sponsor-listing">
          <div className="container">
            <section className="sponsors-section container">
              <h2 className="sponsors-list__title">2019 Sponsors</h2>
              <Sponsors2019 />
            </section>
          </div>
        </div>
      </div>
    );
  }
}
