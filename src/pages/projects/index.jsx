import React, { Fragment } from 'react';
import Link from 'gatsby-link';
import Footer from 'components/footer';

const Projects = () => (
  <Fragment>
    <h1>Browse Projects</h1>
    <Link to="/">Go back to the homepage</Link>
    <Footer firstBackgroundColor="light-blue" />
  </Fragment>
);

export default Projects;
