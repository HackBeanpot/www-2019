import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Footer from '../components/footer';
import Nav from 'components/nav';
import NavMobile from 'components/nav-mobile';

import favicon from '../pages/favicon.png';

import '../../node_modules/@mdi/font/css/materialdesignicons.min.css';
import 'styles/main.scss';

// Shows the header and footer on every page
const Layout = ({ children }) => (
  <div>
    <Helmet
      title="HackBeanpot 2020"
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
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.func
};

export default Layout;
