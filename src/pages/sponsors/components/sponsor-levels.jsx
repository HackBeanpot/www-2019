import React from 'react';
import EngagementIcon from 'images/svg/engagement-icon';
import InnovationIcon from 'images/svg/innovation-icon';
import RecruitmentIcon from 'images/svg/recruitment-icon';

class SponsorLevel extends React.Component {

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
        <div className="sponsor-subtitle">{levelContent.title}</div>
        <div className="row sponsor-level-row">
          <div className="sponsor-level-description col">
            {levelContent.description}         
          </div>
          </div>
      </div>
    );
  }

  render() {
    if (this.props !== undefined && this.props.content !== undefined) {
      return (
        <div className="row">
          {this.props.content.map((content, index) =>
          <div className ="col">{this.renderSponsorColumn(content, index)}</div>
          )}
        </div>
      );
    } else {
      return '';
    }
  }
}

export default SponsorLevel;
