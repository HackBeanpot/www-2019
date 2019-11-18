import React from 'react';
import Layout from '../../components/layout';

import Stories from 'pages/stories/components/stories';
import DynamicLink from '../../components/dynamic-link';

import StoriesPattern from 'images/stories-leaf-pattern.png';

export default () => (
  <Layout>
    <StoriesPage />
  </Layout>
);

const StoriesPage = () => {
  return (
    <div className="stories">
      <section className="stories__header">
        <img
          src={StoriesPattern}
          alt="Background pattern"
          className="stories__pattern"
        />
        <div className="container">
          <h1 className="header__title">We've got stories to&nbsp;share</h1>
          <p className="stories__description">
            Here's a collection of stories from past attendees, organizers, and
            sponsors. Our goal is for everyone’s HackBeanpot experience to be as
            awesome as theirs was!
          </p>
        </div>

        <Stories />
      </section>

      <section className="stories-tell">
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
                alt="HackBeanpot core team"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
