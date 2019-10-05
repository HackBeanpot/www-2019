import React, { Fragment } from 'react';

import Stories from 'pages/stories/components/stories';

class StoriesPage extends React.Component {
  render() {
    return (
      <Fragment>
        {/* TODO: Feed in stories data */}
        <Stories />

        <div className="charles-river-blue-bg">
          <div className="container stories-tell">
            <div className="stories-section-header">
              ... and we've got a story to tell.
            </div>

            <div className="row stories-tell-quote">
              <div className="col-md-7 stories-quote">
                In 2013, a small group of Northeastern students brought 80 students together at the Microsoft NERD Center for the very first HackBeanpot, an opportunity for students to express their creativity and explore. 

                2020 marks our seventh annual event and carries forward the same mission we began with: to foster a diverse community of curious students and engage them with the Boston tech community.
              </div>
              <div className="stories-image stories-image-large">
                <img
                  className="portrait portrait-large"
                  src="http://tools.hackbeanpot.com/assets/images/2018-hbp-group.jpg"
                />
              </div>
            </div>

            <a
                href="#"
                role="button"
                className="yellow-btn lg-btn"
              >
                Meet our Team
            </a>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default StoriesPage;
