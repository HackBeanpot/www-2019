import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import FAQItems from 'components/faq-items';
import AboutItem from 'components/aboutItem/about-item';
import FAQs from 'data/faqs.json';
import AboutContent from 'data/about-content.json';
import SponsorLogos from 'components/sponsor-logos';
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
            content: '#db5945'
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
                <p className="header-text">
                  An independently-run Boston hackathon for curious students,
                  hackers, makers, and beginners. 🎉
                </p>
                <div className="logo-div">
                  <div className="mobile-logo">
                    <Logo />
                  </div>
                  <h1 className="header-title">HackBeanpot</h1>
                </div>
                <p className="header-text">
                  <strong>
                    We are here to celebrate the Boston tech scene.
                  </strong>
                  <br />
                  Our nonprofit organization throws an annual hackathon for the
                  most creative minds in town to dream up tomorrow’s technology.
                  Tech companies, organizers, and students come together to
                  expand their networks and build lasting relationships.
                </p>
              </div>
              <Link to="/sponsors" role="button" className="yellow-btn lg-btn">
                Get involved!
              </Link>
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
          <p className="sponsors-title">2018 Sponsors</p>
          <SponsorLogos />
        </section>
      </div>
      <DynamicFooter firstBackgroundColor="light-blue"/>
    </div>
  );
};

export default App;
