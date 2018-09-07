import React from 'react';
import Link from 'gatsby-link';
import FAQItems from 'components/faq-items';
import MailingListPrompt from 'components/mailing-list-prompt';
import AboutItem from 'components/aboutItem/about-item';
import FAQs from 'data/faqs.json';
import AboutContent from 'data/about-content.json';
import SponsorLogos from 'components/sponsor-logos';
import Logo from 'images/logo-full.jsx';

import HomeBlob1 from 'images/home-blob-1';
import HomeBlob2 from 'images/home-blob-2';
import HomeBlob3 from 'images/home-blob-3';
import HomeBlob4 from 'images/home-blob-4';
import HomeBlob5 from 'images/home-blob-5';
import HomeBlob6 from 'images/home-blob-6';

import Circuit1 from 'images/circuit-1';
import Circuit2 from 'images/circuit-2';
import Circuit3 from 'images/circuit-3';

const App = () => {
  return (
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
              <div>
                <p className="header-text">
                  An independently-run Boston hackathon for curious students,
                  hackers, makers, and beginners.
                </p>
              </div>
              <h1 className="logo-div header-title">HackBeanpot</h1>
              <p className="header-text">
                <strong>
                  We are currently looking for companies to sponsor HackBeanpot
                  2019!
                </strong>
              </p>
            </div>
            <Link to="/sponsors" role="button" className="yellow-btn lg-btn">
              Learn more
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
              <a role="button" class="btn yellow-btn lg-btn">
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="sponsors-section container">
        <SponsorLogos />
      </section>
    </div>
  );
};

export default App;
