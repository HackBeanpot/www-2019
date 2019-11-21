import React from 'react';
import Flickity from 'react-flickity-component';

import EngagementIcon from 'images/svg/engagement-icon';
import InnovationIcon from 'images/svg/innovation-icon';
import RecruitmentIcon from 'images/svg/recruitment-icon';

const flickityOptions = {
  wrapAround: false,
  prevNextButtons: true,
  pageDots: true,
  adaptiveHeight: true
};

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
    if (typeof window !== 'undefined') {
      if (this.props !== undefined && this.props.content !== undefined) {
        return (
          <Flickity
            className="sponsor-levels-carousel"
            options={flickityOptions}
          >
            {this.props.content.map((content, index) =>
              this.renderSponsorColumn(content, index)
            )}
          </Flickity>
        );
      } else {
        return null;
      }
    } else {
      return null;
    }
  }
}

export default SponsorLevelsMobile;
