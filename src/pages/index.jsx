import React from 'react';
import FAQItems from 'components/faq-items';
import MailingListPrompt from 'components/MailingListPrompt';
import AboutItem from 'components/aboutItem/AboutItem';
import FAQs from 'data/FAQs.json';
import AboutContent from 'data/aboutContent.json';

const App = () => {
  return (
    <div className="light-background">
      <section className="landing-section container">
        <div class="row">
          <img
            className="hero-logo col-4"
            src="https://hackbeanpot.com/img/solid_logo.png"
          />
          <div className="offset-1 col-6">
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
            <a href="/sponsors" role="button" className="yellow-btn lg-btn">
              Learn more
            </a>
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

      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <FAQItems FAQs={FAQs} />
      </section>

      <section className="sponsors-section">
        <h2>2018 Sponsors</h2>
        <div className="row">
          <a href="https://www.intuit.com/" className="sponsor col-12 text-center">
            <img src="https://hackbeanpot.com/img/sponsors/Intuit_2016_RGB.jpg" />
          </a>
        </div>
        <div className="row">
          <a href="https://wearegenuine.com/" className="sponsor col-6 text-center">
            <img src="https://hackbeanpot.com/img/sponsors/genuine-840.png" />
          </a>
          <a href="http://www.jackmorton.com/" className="sponsor col-6 text-center">
            <img src="https://hackbeanpot.com/img/sponsors/jack-morton-logo.jpg" />
          </a>
        </div>
        <div className="row">
          <a href="https://marketing.poweradvocate.com/" className="sponsor col-12 text-center">
            <img src="https://hackbeanpot.com/img/sponsors/PowerAdvocate-500.png" />
          </a>
        </div>
        <div className="row">
          <a href="https://www.trinetx.com/" className="sponsor col-12 text-center">
            <img src="https://hackbeanpot.com/img/sponsors/TriNetX-450.jpg" />
          </a>
        </div>
        <div className="row">
          <a href="https://www.northeastern.edu/pan/" className="sponsor col-4 text-center">
            <img src="https://hackbeanpot.com/img/sponsors/pan-neu-500.jpg" />
          </a>
          <a href="https://drift.com//" className="sponsor col-4 text-center">
            <img src="https://hackbeanpot.com/img/sponsors/DriftLogo-300.png" />
          </a>
          <a href="https://www.bookbub.com/careers" className="sponsor col-4 text-center">
            <img src="https://hackbeanpot.com/img/sponsors/bookbub-428.png" />
          </a>
        </div>
        <div className="row">
          <a href="http://www.gtiproperties.com/" className="sponsor col-6 text-center">
            <img src="https://hackbeanpot.com/img/sponsors/GTI_logo-840.png" />
          </a>
          <a href="http://www.roughdraft.vc/" className="sponsor col-6 text-center">
            <img src="https://hackbeanpot.com/img/sponsors/rdv-logo-150.png" />
          </a>
        </div>
        <h2>In-kind sponsors</h2>
        <div className="row">
          <a href="http://unionsquaredonuts.com/" className="sponsor col-6 text-center">
            <img src="https://hackbeanpot.com/img/in-kind-sponsors/union-square-donuts-700.png" />
          </a>
          <a href="https://www.chipotle.com/" className="sponsor col-6 text-center">
            <img src="https://hackbeanpot.com/img/in-kind-sponsors/Chipotle-Full-Logo.png" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default App;
