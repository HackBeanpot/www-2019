import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import StaticFooter from "../components/static-footer";
import Nav from 'components/nav';
import 'styles/global-style.scss';

// Shows the header and footer on every page
const Layout = ({ children }) => (
  <div>
    <Helmet
      title={'HackBeanpot'}
      meta={[
        { name: 'description', content: 'A Boston area hackathon' },
        { name: 'keywords', content: 'Hack Beanpot' }
      ]}
    />
    <Nav />
    <div>{children()}</div>
    <StaticFooter />
  </div>
);

Layout.propTypes = {
  children: PropTypes.func
};

export default Layout;
