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
        <div className="sponsor-level__icon">{icon}</div>
        <div className="sponsor-level__title">{levelContent.title}</div>
        <div className="sponsor-level__description">
          {levelContent.description}
        </div>
      </div>
    );
  }

  render() {
    if (this.props !== undefined && this.props.content !== undefined) {
      return (
        <div className="sponsor-levels">
          {this.props.content.map((content, index) => {
            return this.renderSponsorColumn(content, index);
          })}
        </div>
      );
    } else {
      return '';
    }
  }
}

export default SponsorLevel;
