import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import FAQItems from 'components/faq-items';
import AboutItem from 'components/aboutItem/about-item';
import CountdownClock from 'components/countdownClock/countdown-clock';
import FAQs from 'data/faqs.json';
import AboutContent from 'data/about-content.json';
import Sponsors2019 from 'components/sponsors-2019';
import Logo from 'images/logo-full.jsx';
import DynamicFooter from 'components/dynamic-footer';

import HomeBlob1 from 'images/home-blob-1';
import HomeBlob2 from 'images/home-blob-2';
import HomeBlob3 from 'images/home-blob-3';
import HomeBlob4 from 'images/home-blob-4';
import HomeBlob5 from 'images/home-blob-5';
import HomeBlob6 from 'images/home-blob-6';

import Circuit1 from 'images/circuit-1';
import Circuit2 from 'images/circuit-2';
import Circuit3 from 'images/circuit-3';

import favicon from './favicon.png';

const App = () => {
  return (
    <div>
      <Helmet
        title="HackBeanpot 2019"
        meta={[
          {
            name: 'description',
            content:
              'An independently-run Boston hackathon for curious students, hackers, makers, and beginners.'
          },
          {
            name: 'keywords',
            content: 'hackathon, boston, students, hackers, makers, beginners'
          },
          {
            name: 'theme-color',
            content: '#A4DBE8'
          }
        ]}
        link={[{ rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }]}
      />

      <div className="light-background home">
        <HomeBlob1 />
        <HomeBlob2 />
        <HomeBlob3 />
        <HomeBlob4 />
        <HomeBlob5 />
        <HomeBlob6 />
        <Circuit1 />
        <Circuit2 />
        <section className="landing-section container">
          <div className="row">
            <div className="hero-logo col-md-5">
              <Logo />
            </div>
            <div className="col-md-7 header">
              <div className="header-content">
                <div className="logo-div">
                  <div className="mobile-logo">
                    <Logo />
                  </div>
                  <h1 className="header-title">HackBeanpot</h1>
                </div>
                <p className="header-text">
                  An independently-run Boston hackathon for curious students,
                  hackers, makers, and beginners. 🎉
                  <br />
                  <br />
                  <strong>Come celebrate the Boston tech scene with us!</strong>
                  <br />
                  February 8-10, 2019
                  <br />
                  Catalant Technologies
                  <br />
                  Seaport District
                  <CountdownClock
                    eventStartDate={new Date('February 8, 2019 20:00:00')}
                    hackingEndDate={new Date('February 10, 2019 11:00:00')}
                  />
                  <a
                    href="http://tools.hackbeanpot.com/assets/schedule/HackBeanpot-2019-Schedule.pdf"
                    role="button"
                    target="_blank"
                    class="yellow-btn lg-btn"
                  >
                    Our schedule!
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="about-section container">
          <p className="about-title">HackBeanpot is about...</p>
          {AboutContent.map(item => (
            <AboutItem
              title={item.title}
              content={item.content}
              imgSrc={item.imgSrc}
              hasBtn={item.hasBtn}
              btn={item.btn}
              floatDirection={item.floatDirection}
            />
          ))}
        </section>
        <section className="faq-section dark-background">
          <div className="container">
            <p className="faq-title">Frequently Asked Questions</p>
            <FAQItems FAQs={FAQs} />
            <div>
              <div className="center-text faq-button-title">
                Don't see your question?
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
          </div>
        </section>
        <section className="sponsors-section container">
          <p className="sponsors-title">2019 Sponsors</p>
          <Sponsors2019 />
          <a
            href="/sponsors"
            role="button"
            class="yellow-btn lg-btn sponsor-button sponsor-button-center"
          >
            Become a sponsor
          </a>
        </section>
      </div>
      <DynamicFooter firstBackgroundColor="light-blue" />
    </div>
  );
};

export default App;
