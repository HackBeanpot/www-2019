import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import StaticFooter from '../components/static-footer';
import Nav from 'components/nav';
import NavMobile from 'components/nav-mobile';
import 'styles/main.scss';
import favicon from '../pages/favicon.png';

// Shows the header and footer on every page
const Layout = ({ children }) => (
  <div>
    <Helmet
      title="HackBeanpot 2019"
      meta={[
        {
          name: 'description',
          content:
            'An independently-run Boston hackathon for curious students, hackers, makers, and beginners.'
        },
        {
          name: 'keywords',
          content: 'hackathon, boston, students, hackers, makers, beginners'
        },
        {
          name: 'theme-color',
          content: '#A4DBE8'
        }
      ]}
      link={[{ rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }]}
    />
    <Nav />
    <NavMobile />
    <div>{children()}</div>
    <StaticFooter />
  </div>
);

Layout.propTypes = {
  children: PropTypes.func
};

export default Layout;
