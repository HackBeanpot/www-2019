import React, { Fragment } from 'react';
import Layout from '../../components/layout';

import TeamData from 'data/meet-the-team.json';
import TeamNameLeaf from 'images/svg/team-name-leaf.jsx';
import TeamLeafPattern from 'images/svg/team-leaf-pattern.jsx';
import TeamBadgeLeaf from 'images/svg/team-badge-leaf.jsx';

export default () => (
  <Layout>
    <Team />
  </Layout>
);

const TeamMember = props => (
  <div className="team-member">
    <div className="team-member__image-container">
      <div className="team-member__image">
        <div className="team-member__circle" />

        <img src={props.headshot} alt={props.name} />
      </div>
      <span className="team-member__fun-fact">{props.funFact}</span>
    </div>
    <p className="team-member__name">{props.name}</p>
    <p>{props.position}</p>
  </div>
);

const Team = () => {
  // Leadership
  function renderLeadership(section) {
    return (
      <div className="row">
        <div className="col-6">
          <TeamMember
            name={section.members[0].name}
            position={section.members[0].position}
            funFact={section.members[0].funFact}
            headshot={section.members[0].headshot}
          />
        </div>
        <div className="col-6">
          <TeamMember
            name={section.members[1].name}
            position={section.members[1].position}
            funFact={section.members[1].funFact}
            headshot={section.members[1].headshot}
          />
        </div>
      </div>
    );
  }

  // Design
  function renderDesign(section) {
    return (
      <Fragment>
        <h3 className="team__title">Design</h3>
        <div className="team-leaf">
          <TeamNameLeaf />
        </div>
        <div className="row">
          <div className="col-sm-4 col-6">
            <TeamMember
              name={section.members[0].name}
              position={section.members[0].position}
              funFact={section.members[0].funFact}
              headshot={section.members[0].headshot}
            />
          </div>
          <div className="col-sm-4 col-6">
            <TeamMember
              name={section.members[1].name}
              position={section.members[1].position}
              funFact={section.members[1].funFact}
              headshot={section.members[1].headshot}
            />
          </div>
          <div className="col-sm-4 col-6">
            <TeamMember
              name={section.members[2].name}
              position={section.members[2].position}
              funFact={section.members[2].funFact}
              headshot={section.members[2].headshot}
            />
          </div>
          <div className="col-sm-4 offset-sm-2 col-6">
            <TeamMember
              name={section.members[3].name}
              position={section.members[3].position}
              funFact={section.members[3].funFact}
              headshot={section.members[3].headshot}
            />
          </div>
          <div className="col-sm-4 col-6">
            <TeamMember
              name={section.members[4].name}
              position={section.members[4].position}
              funFact={section.members[4].funFact}
              headshot={section.members[4].headshot}
            />
          </div>
        </div>
      </Fragment>
    );
  }

  // Outreach
  function renderOutreach(section) {
    return (
      <Fragment>
        <h3 className="team__title">Outreach</h3>
        <div className="team-leaf">
          <TeamNameLeaf />
        </div>

        <div className="row">
          <div className="col-6">
            <TeamMember
              name={section.members[0].name}
              position={section.members[0].position}
              funFact={section.members[0].funFact}
              headshot={section.members[0].headshot}
            />
          </div>
          <div className="col-6">
            <TeamMember
              name={section.members[1].name}
              position={section.members[1].position}
              funFact={section.members[1].funFact}
              headshot={section.members[1].headshot}
            />
          </div>
          <div className="col-6">
            <TeamMember
              name={section.members[2].name}
              position={section.members[2].position}
              funFact={section.members[2].funFact}
              headshot={section.members[2].headshot}
            />
          </div>
          <div className="col-6">
            <TeamMember
              name={section.members[3].name}
              position={section.members[3].position}
              funFact={section.members[3].funFact}
              headshot={section.members[3].headshot}
            />
          </div>
        </div>
      </Fragment>
    );
  }

  // Social
  function renderSocial(section) {
    return (
      <Fragment>
        <h3 className="team__title">Social</h3>
        <div className="team-leaf">
          <TeamNameLeaf />
        </div>
        <div className="row">
          <div className="offset-sm-4 col-sm-4 col-6">
            <TeamMember
              name={section.members[0].name}
              position={section.members[0].position}
              funFact={section.members[0].funFact}
              headshot={section.members[0].headshot}
            />
          </div>
        </div>
      </Fragment>
    );
  }

  // Sponsorship
  function renderSponsorship(section) {
    return (
      <Fragment>
        <h3 className="team__title">Sponsorship</h3>
        <div className="team-leaf">
          <TeamNameLeaf />
        </div>
        <div className="row">
          <div className="col-6">
            <TeamMember
              name={section.members[0].name}
              position={section.members[0].position}
              funFact={section.members[0].funFact}
              headshot={section.members[0].headshot}
            />
          </div>
          <div className="col-6">
            <TeamMember
              name={section.members[1].name}
              position={section.members[1].position}
              funFact={section.members[1].funFact}
              headshot={section.members[1].headshot}
            />
          </div>
          <div className="col-6">
            <TeamMember
              name={section.members[2].name}
              position={section.members[2].position}
              funFact={section.members[2].funFact}
              headshot={section.members[2].headshot}
            />
          </div>
          <div className="col-6">
            <TeamMember
              name={section.members[3].name}
              position={section.members[3].position}
              funFact={section.members[3].funFact}
              headshot={section.members[3].headshot}
            />
          </div>
        </div>
      </Fragment>
    );
  }

  // Tech
  function renderTech(section) {
    return (
      <Fragment>
        <h3 className="team__title">Tech</h3>
        <div className="team-leaf">
          <TeamNameLeaf />
        </div>
        <div className="row">
          <div className="col-6">
            <TeamMember
              name={section.members[0].name}
              position={section.members[0].position}
              funFact={section.members[0].funFact}
              headshot={section.members[0].headshot}
            />
          </div>
          <div className="col-6">
            <TeamMember
              name={section.members[1].name}
              position={section.members[1].position}
              funFact={section.members[1].funFact}
              headshot={section.members[1].headshot}
            />
          </div>
          <div className="offset-sm-3 col-6">
            <TeamMember
              name={section.members[2].name}
              position={section.members[2].position}
              funFact={section.members[2].funFact}
              headshot={section.members[2].headshot}
            />
          </div>
        </div>
      </Fragment>
    );
  }

  return (
    <div className="team">
      <section className="team__header">
        <div className="container">
          <h1 className="header__title">Meet the Team behind HackBeanpot</h1>
          <div className="team-header__info-container">
            <p className="team-header__description">
              We are a group of ~20 driven students who aim to make technical
              experience and knowledge accessible to anyone. In the months
              leading up to our hackathon in February, we work hard both within
              and across our five teams - Design, Outreach, Social Media,
              Sponsorship, and Tech!
            </p>
            <div className="team-badge-leaf__container">
              <span className="team-badge-leaf">
                <TeamBadgeLeaf />
              </span>
              <span className="team-badge-leaf__content">
                Hover over a headshot for a fun fact!
              </span>
            </div>
          </div>
          {renderLeadership(TeamData[0])}
        </div>
      </section>

      <section className="all-teams">
        <div className="container">
          {renderDesign(TeamData[1])}
          {renderOutreach(TeamData[2])}
          {renderSocial(TeamData[3])}
          {renderSponsorship(TeamData[4])}
          {renderTech(TeamData[5])}

          <div className="team__cta-container">
            <h3 className="team__cta-label">
              Want to learn more about our team and HackBeanpot?
            </h3>
            <a
              href="mailto:team@hackbeapot.com"
              className="team__cta"
              role="button"
            >
              Email us
            </a>
          </div>
        </div>
        <span className="team-leaf-pattern">
          <TeamLeafPattern />
        </span>
      </section>
    </div>
  );
};
