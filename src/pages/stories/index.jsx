import React, { Fragment } from 'react';

import Footer from 'components/footer';
import Stories from 'pages/stories/components/stories';
import FeaturedProjects from 'pages/stories/components/featured-projects';

class StoriesPage extends React.Component {
  render() {
    return (
      <Fragment>
        {/* TODO: Feed in stories data */}
        <Stories />

        <div className="stories-future">
          <h2>Our Future</h2>
          <p>{/* TODO: Come up with content for this */}</p>
        </div>

        {/* TODO: Feed in projects data */}
        <FeaturedProjects />
        <Footer firstBackgroundColor="light-blue" />
      </Fragment>
    );
  }
}

export default StoriesPage;
