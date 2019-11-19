import React from 'react';
import EngagementIcon from 'images/svg/engagement-icon';
import InnovationIcon from 'images/svg/innovation-icon';
import RecruitmentIcon from 'images/svg/recruitment-icon';

import Flickity from 'react-flickity-component';

const flickityOptions = {}

class SponsorLevelsMobile extends React.Component {

  renderSponsorColumn(levelContent, index) {
    let icon;
    if (levelContent.title === 'Engagement') {
      icon = <EngagementIcon />;
    } else if (levelContent.title === 'Innovation') {
      icon = <InnovationIcon />;
    } else if (levelContent.title === 'Recruitment') {
      icon = <RecruitmentIcon />;
    }

    return (
      <div key={`sponsor-level-${index}`} className="sponsor-level">
        <div className="text-center">{icon}</div>
        <div className="sponsor-level__title">{levelContent.title}</div>
        <div className="row sponsor-level-row">
          <div className="sponsor-level__description col">
            {levelContent.description}         
          </div>
          </div>
      </div>
    );
  }

  render() {
    if (this.props !== undefined && this.props.content !== undefined) {
      return (
        <Flickity
          className={'carousel'} // default ''
          elementType={'div'} // default 'div'
          options={flickityOptions} // takes flickity options {}
          disableImagesLoaded={false} // default false
          reloadOnUpdate // default false
          static // default false
        >
          <div>
            <EngagementIcon />
          </div>
          <div>
            <InnovationIcon />
          </div>
          <div>
            <RecruitmentIcon />
          </div>
        </Flickity>
      );
    } else {
      return '';
    }
  }
}

export default SponsorLevelsMobile;

