import React, { Fragment } from 'react';
import Link from 'gatsby-link';
import DynamicFooter from '../../components/dynamic-footer';

const Projects = () => (
  <Fragment>
    <h1>Browse Projects</h1>
    <Link to="/">Go back to the homepage</Link>
    <DynamicFooter firstBackgroundColor="light-blue" />
  </Fragment>
);

export default Projects;
