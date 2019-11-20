import React from 'react';
import EngagementIcon from 'images/svg/engagement-icon';
import InnovationIcon from 'images/svg/innovation-icon';
import RecruitmentIcon from 'images/svg/recruitment-icon';

import Flickity from 'flickity';
import 'flickity/dist/flickity.min.css';

class SponsorLevelsMobile extends React.Component {

  componentDidMount() {
    this.flkty = new Flickity('.sponsor-levels-carousel', {
      wrapAround: true,
      prevNextButtons: true,
      pageDots: true,
      lazyLoad: 1
    });
  }

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
        <div className="sponsor-levels-carousel" data-flickity="">
          {this.props.content.map((content, index) =>
            <div className ="carousel-cell">
              {this.renderSponsorColumn(content, index)}
            </div>
          )}
        </div>
      );
    } else {
      return '';
    }
  }
}

export default SponsorLevelsMobile;

