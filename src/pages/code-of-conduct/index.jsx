import React from 'react';

import BasicLeaf from 'images/svg/basic-leaf';

const CodeOfConduct = () => (
  <div className="coc">
    <span className="coc__leaf">
      <BasicLeaf />
    </span>
    <h1 className="coc__heading">HackBeanpot 2020 Code of Conduct</h1>
    <div className="coc__body">
      <p>
        The HackBeanpot team is dedicated to providing a safe, harassment-free
        experience for everyone, regardless of gender, age, sexual orientation,
        disability, physical appearance, body size, race, ethnicity,
        nationality, religion, previous hackathon attendance, or computing
        experience (or lack of any of the aforementioned). We do not tolerate
        harassment of hackathon participants in any form. Harassment includes,
        but is not limited to: offensive comments, sexual language or imagery,
        deliberate intimidation, stalking, harassing photography or recording,
        sustained general disruption, inappropriate physical contact, and
        unwelcome sexual attention.
      </p>
      <p>
        Harassment is not tolerated in any part of the hackathon, including
        within the venue, as a part of hacks created at the event, on social
        media, or other online media. Hackathon attendees violating these rules
        may be warned, disqualified, or expelled from the hackathon at the
        discretion of the Event Staff.
      </p>
      <p>
        Participants asked to stop any harassing behavior are expected to comply
        immediately. If a participant engages in harassing behavior during,
        before, or after the event, the Event Staff may take any action they
        deem appropriate, including warning the offender, expelling them from
        the hackathon and removing them from the premises, or excluding them
        from any and all future events.
      </p>
      <p>
        If you are being harassed, notice that someone else is being harassed,
        or have any other concerns, please contact a member of the Event Staff
        immediately. Event Staff can be identified by their t-shirts. Event
        Staff will be happy to help participants contact security or local law
        enforcement, provide escorts, or otherwise assist those experiencing
        harassment to feel safe for the duration of the hackathon. We value you.
      </p>
      <br />

      <p className="coc__subheading">Event Staff can be reached by:</p>
      <ul>
        <li>
          Email:{' '}
          <a href="mailto:staff@hackbeanpot.com">staff@hackbeanpot.com</a>
        </li>
        <li>
          Twitter:{' '}
          <a href="https://www.twitter.com/hackbeanpot" target="_blank">
            @HackBeanpot
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default CodeOfConduct;
