import React, { Fragment } from 'react';

import DynamicFooter from 'components/dynamic-footer';
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

            <div className="row">
              <div className="col-md-8 stories-cta">
                Whether you're an attendee, mentor, or an organizer, you'll come
                to HackBeanpot with a story to tell. <br /> Here's a collection
                of stories of previous attendees. Our hackers are our priority
                and we aim to have everyone walk out with stories as unique and
                inspiring as these!
              </div>
            </div>
            <div className="row stories-tell-quote">
              <div className="offset-md-2 col-md-5 stories-quote">
                <i>"Wow HackBeanpot is great wow i love"</i>
                <div>- A Person, A Company</div>
              </div>
              <div className="stories-round-image">
                Picture here Picture here Picture here Picture here Picture here
                Picture here Picture here Picture here Picture here Picture here
                Picture here Picture here Picture here Picture here Picture here
                Picture here Picture here Picture here Picture here Picture here
              </div>
            </div>
            <div className="row stories-tell-quote">
              <div className="offset-md-2" />
              <div className="stories-round-image">
                Picture here Picture here Picture here Picture here Picture here
                Picture here Picture here Picture here Picture here Picture here
                Picture here Picture here Picture here Picture here Picture here
                Picture here Picture here Picture here Picture here Picture here
              </div>
              <div className="col-md-5 stories-quote">
                <i>"Wow HackBeanpot is great wow i love"</i>
                <div>- Another Person, Another Company</div>
              </div>
            </div>
            <div className="center-text stories-button-title">
              Share your story with us!
              <br />
              <br />
              <a
                href="mailto:team@hackbeanpot.com"
                role="button"
                class="btn yellow-btn lg-btn"
              >
                Get Involved
              </a>
            </div>
          </div>
        </div>

        <DynamicFooter firstBackgroundColor="light-blue" />
      </Fragment>
    );
  }
}

export default StoriesPage;
