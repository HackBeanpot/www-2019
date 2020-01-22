import React from 'react';
import Layout from '../../components/layout';

import SponsorKits from 'pages/sponsors/components/sponsor-kits';
import Sponsors2020 from 'components/sponsors-2020';
import SponsorshipVines from 'images/svg/sponsorship-vines';
import SponsorsLeafPattern from 'images/sponsors-leaf-pattern.png';

export default () => (
  <Layout>
    <SponsorsPage />
  </Layout>
);

class SponsorsPage extends React.Component {
  render() {
    return (
      <div className="sponsors">
        {/* Header */}
        <section className="sponsors-header">
          <span className="sponsors-vines">
            <SponsorshipVines />
          </span>
          <div className="container">
            <h1 className="sponsors-header__title">Sponsor HackBeanpot</h1>
            <div className="sponsors-header__description">
              <p>
                Want to get involved in sponsoring HackBeanpot? We are always
                looking for additions to our growing family. Our sponsors are
                innovative companies interested in embracing the hackathon
                spirit and connecting with our community of talented students
                and partners. Read more about our sponsorship opportunities
                below!
              </p>
              <p className="sponsors-header__ps">
                P.S. First time sponsoring a hackathon? HackBeanpot is a great
                place to start! Our sponsorship team will guide you through the
                process.
              </p>
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

        {/* Our Sponsorship Model */}
        <section className="sponsorship-model">
          <div className="container">
            <h2 className="sponsorship-model__title">Our Sponsorship Model</h2>
            <div className="sponsorship-model__description">
              We know that our sponsors have different goals in partnering with
              us, which is why we want to equip you with the ability to create a
              custom sponsorship package! We have broken our sponsorship perks
              down into three kits that you can mix and match — giving you the
              tools to personalize your company’s hackathon experience. Here's a
              brief overview of each kit:
            </div>
            <div className="sponsorship-model__subtitle">The 3 Kits</div>
            <SponsorKits />
            <div className="sponsorship-model__cta-group">
              <p className="sponsorship-model__cta-label">
                Want to receive our full sponsorship package?
              </p>
              <a
                href="mailto:sponsorship@hackbeanpot.com"
                role="button"
                className="sponsorship-model__cta"
              >
                Email our team
              </a>
            </div>
          </div>
          <img
            src={SponsorsLeafPattern}
            alt="Background leaf pattern"
            className="sponsorship-model__pattern"
          />
        </section>

        {/* 2019 Sponsors */}
        <section className="sponsors-list">
          <div className="container">
            <h2 className="sponsors-list__title">2020 Sponsors</h2>
            <Sponsors2020 />
          </div>
        </section>
      </div>
    );
  }
}
