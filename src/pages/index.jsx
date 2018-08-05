import React, { Fragment } from 'react';
import FAQItem from '../components/FAQItem';
import MailingListPrompt from '../components/MailingListPrompt';
import AboutItem from '../components/aboutItem/AboutItem';
import Button from '../components/Button';

const App = () => {
  const aboutStoriesContent = (
    <p>
      Memorable stories from HackBeanpot are just one of the things that make us
      unique. Our attendees range from CS graduate students to beginner
      designers who have never written a line of code before.
    </p>
  );

  const aboutProjectsContent = (
    <p>
      Projects at HackBeanpot are about learning and exploration. In past years
      they’ve ranged from an IoT pill bottle (SecureStash) to a crowdsourced
      music playlist (CrowdDJ) to a scripting language made entirely of emojis
      (EmojiScript).
    </p>
  );

  const aboutPeopleContent = (
    <Fragment>
      <p>
        Every year HackBeanpot looks forward to hosting XXX curious students,
        experienced hackers, and hi-tech sponsors at the Genuine HQ in Boston.
        The only person we’re missing is you!
      </p>
      <p>
        <strong>Interested in sponsoring HackBeanpot?</strong>
      </p>
    </Fragment>
  );

  return (
    <div className="light-background">
      <section className="landing-section container">
        <div class="row">
          <img
            className="hero-logo col-4"
            src="https://hackbeanpot.com/img/solid_logo.png"
          />
          <div className="offset-1 col-6">
            <div>
              <h4>
                An independently-run Boston hackathon for curious students,
                hackers, makers, and beginners.
              </h4>
            </div>
            <h1 className="logo-div header-title">HackBeanpot</h1>
            {/* <MailingListPrompt /> */}
            <h4>
              We are currently looking for companies to sponsor HackBeanpot
              2018!
            </h4>
            <Button text="Learn More" size="lg-btn" />
          </div>
        </div>
      </section>

      <section className="about-section container">
        <h2>HackBeanpot is about...</h2>
        <AboutItem
          header="The stories."
          content={aboutStoriesContent}
          hasBtn={false}
          floatDirection="left"
        />
        <AboutItem
          header="The projects."
          content={aboutProjectsContent}
          hasBtn={false}
          floatDirection="right"
        />
        <AboutItem
          header="The people."
          content={aboutPeopleContent}
          hasBtn={true}
          btn={{
            text: 'Check out our Sponsors page',
            url: '/sponsorship',
            size: 'md-btn'
          }}
          floatDirection="left"
        />
      </section>

      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <FAQItem question="Question 1" answer="Answer 1" />
        <FAQItem question="Question 2" answer="Answer 2" />
        <FAQItem question="Question 3" answer="Answer 3" />
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
