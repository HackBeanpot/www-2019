import React, { Fragment } from 'react';

import Stories from 'pages/stories/components/stories';

class StoriesPage extends React.Component {
  render() {
    return (
      <Fragment>
        {/* TODO: Feed in stories data */}
        <Stories />

        <div className="dark-background">
          <div className="container stories-tell">
            <div className="stories-section-header">
              ... And we've got a story to tell.
            </div>

            <div className="row stories-tell-quote">
              <div className="col-md-7 stories-quote">
                In 2013, a small group of Northeastern students brought 80
                students together at the Microsoft NERD Center for the very
                first HackBeanpot, an opportunity for students to express their
                creativity and explore. 2020 marks our eighth annual event and
                carries forward the same mission we began with: to foster a
                diverse community of curious students and engage them with the
                Boston tech community
              </div>
              <div className="stories-round-image stories-round-image-large">
                <img
                  className="portrait portrait-large"
                  src="http://tools.hackbeanpot.com/assets/images/2018-hbp-group.jpg"
                />
              </div>
            </div>

            <div className="row stories-tell-quote">
              <div className="stories-round-image stories-round-image-large hide-small">
                <img
                  className="portrait portrait-large"
                  src="http://tools.hackbeanpot.com/assets/images/2018-hbp-candid.jpg"
                />
              </div>
              <div className="col-md-1" />
              <div className="col-md-7 stories-quote">
                Although our mission remains the same year to year, our core
                team has the freedom to take the event in a new direction each
                year. By taking calculated risks and challenging ourselves to
                both improve the organization and meet our own personal goals,
                each of our events has a different personality the reflects the
                unique team behind it. From revamping our brand, to updating our
                sponsorship strategy and even changing the internal structure of
                our team, we have had a blast learning together and making this
                year’s event our own!
              </div>
            </div>
            <div className="center-text stories-button-title">
              Become a part of next year's story.
              <br />
              <br />
              <a
                href="mailto:team@hackbeanpot.com"
                role="button"
                className="btn yellow-btn lg-btn"
              >
                Get Involved
              </a>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default StoriesPage;
