import React from 'react';
import Layout from '../../components/layout';
import DynamicLink from 'components/dynamic-link';

export default () => (
  <Layout>
    <NotFoundPage />
  </Layout>
);

const NotFoundPage = () => (
  <div className="not-found-page">
    <h1 className="not-found-page__heading">404</h1>
    <p className="not-found-page__text">
      Oops! The page you're looking for isn't here.
    </p>
    <DynamicLink role="button" className="not-found-page__btn" to="/">
      Back to home
    </DynamicLink>
  </div>
);
