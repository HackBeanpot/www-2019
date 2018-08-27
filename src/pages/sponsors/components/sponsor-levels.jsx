import React, { Fragment } from 'react';
import GrowIcon from 'images/grow-icon';
import RecruitIcon from 'images/recruit-icon';
import InspireIcon from 'images/inspire-icon';

class SponsorLevel extends React.Component {
  constructor(props) {
    super(props);
    this.renderSponsorRow = this.renderSponsorRow;
  }

  renderSponsorRow(levelContent) {
    let icon;
    if (levelContent.title === 'Grow') {
      icon = <GrowIcon />;
    } else if (levelContent.title === 'Inspire') {
      icon = <InspireIcon />;
    } else if (levelContent.title === 'Recruit') {
      icon = <RecruitIcon />;
    }

    return (
      <div className="sponsor-level col-xl-12">
        {icon}
        <div className="sponsor-subtitle">{levelContent.title}</div>
        <div className="row sponsor-level-row">
          <div className="col-md-6 sponsor-level-description">
            {levelContent.description}
          </div>
          <div className="col-md-6">
            <div className="sponsor-level-quote">"{levelContent.quote}"</div>
            <br />
            - {levelContent.credit}
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="row">
        {this.props.content.map(content => this.renderSponsorRow(content))}
      </div>
    );
  }
}

export default SponsorLevel;
