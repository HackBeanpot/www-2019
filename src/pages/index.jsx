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

      <section className="faq-section container">
        <p className="faq-title">Frequently Asked Questions</p>
        <FAQItems FAQs={FAQs} />
      </section>

      <section className="sponsors-section">
        <h2>2019 Sponsors</h2>
        <div>
          <img
            className="sponsor"
            src="https://www.freelogodesign.org/Content/img/logo-ex-5.png"
          />
          <img
            className="sponsor"
            src="https://www.freelogodesign.org/Content/img/logo-ex-5.png"
          />
          <img
            className="sponsor"
            src="https://www.freelogodesign.org/Content/img/logo-ex-5.png"
          />
        </div>
      </section>
    </div>
  );
};

export default App;
