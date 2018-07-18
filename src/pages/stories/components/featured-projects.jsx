import React from 'react';
import Link from 'gatsby-link';

import ProjectDetailed from 'pages/stories/components/project-detailed';

class FeaturedProjects extends React.Component {
  render() {
    return (
      <div>
        <h2>Made at HackBeanpot</h2>
        {/* TODO: For each map through projects */}
        <ProjectDetailed />
        <Link className="all-projects-link" to="/projects/">
          See all projects
        </Link>
      </div>
    );
  }
}

export default FeaturedProjects;
