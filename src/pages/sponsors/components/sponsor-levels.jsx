import React, { Fragment } from 'react';
import GrowIcon from 'images/grow-icon';
import RecruitIcon from 'images/recruit-icon';
import InspireIcon from 'images/inspire-icon';

class SponsorLevel extends React.Component {
  constructor(props) {
    super(props);
    this.renderSponsorRow = this.renderSponsorRow;
  }

  renderSponsorColumn(levelContent, index) {
    let icon;
    if (levelContent.title === 'Engagement') {
      icon = <GrowIcon />;
    } else if (levelContent.title === 'Innovation') {
      icon = <InspireIcon />;
    } else if (levelContent.title === 'Recruitment') {
      icon = <RecruitIcon />;
    }

    return (
      <div key={`sponsor-level-${index}`} className="sponsor-level col-xl-12">
        <div className="text-center">{icon}</div>
        <div className="text-center sponsor-subtitle">{levelContent.title}</div>
        <div className="row sponsor-level-row">
          <div className="sponsor-level-description">
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
