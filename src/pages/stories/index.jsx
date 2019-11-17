import React, { Fragment } from 'react';

import Stories from 'pages/stories/components/stories';
import DynamicLink from '../../components/dynamic-link';

const StoriesPage = () => {
  return (
    <Fragment>
      <div className="stories-welcome container">
        <h1 className="stories__title">We've got stories to share</h1>
        <p className="stories__description col-md-8">
          Here's a collection of stories from past attendees, organizers, and
          sponsors. Our goal is for everyone’s HackBeanpot experience to be as
          awesome as theirs was!
        </p>
        <Stories />
      </div>

      <div className="stories-tell">
        <div className="container">
          <h2 className="stories-tell__heading">
            ...and we've got a story to&nbsp;tell.
          </h2>

          <div className="stories-tell__content">
            <div className="stories-tell__desc-cta">
              <p className="stories-tell__description">
                In 2013, a small group of Northeastern students brought 80
                students together at the Microsoft NERD Center for the very
                first HackBeanpot, an opportunity for students to express their
                creativity and explore.
                <br />
                <br />
                2020 marks our seventh annual event and carries forward the same
                mission we began with: to foster a diverse community of curious
                students and engage them with the Boston tech community.
              </p>
              <DynamicLink
                role="button"
                className="stories-tell__cta"
                to="/team"
              >
                Meet our team
              </DynamicLink>
            </div>
            <div className="stories-tell__img-container">
              <img
                className="stories-tell__img"
                src="http://tools.hackbeanpot.com/assets/images/team.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default StoriesPage;
