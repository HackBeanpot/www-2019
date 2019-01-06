import React from 'react';
import Quote from 'pages/stories/components/quote';
import Circuit1 from 'images/circuit-1';
import SponsorBlob1 from 'images/sponsor-blob-1';
import SponsorBlob2 from 'images/sponsor-blob-2';

class Stories extends React.Component {
  constructor(props) {
    super(props);
    this.state = { quote: 'placeholder quote', author: 'Someone', from: 'NEU' };
  }

  render() {
    return (
      <div className="light-background stories-welcome">
        <div className="container">
          <div className="stories-title">We've got stories to share</div>
          <div className="row">
            <div className="stories-cta col-md-8">
              Whether you're an attendee, mentor, or an organizer, you'll come
              to HackBeanpot with a story to tell. <br /> Here's a collection of
              stories of previous attendees. Our hackers are our priority and we
              aim to have everyone walk out with stories as unique and inspiring
              as these!
            </div>
          </div>

          <Quote
            quote={this.state.quote}
            author={this.state.author}
            from={this.state.from}
          />
        </div>
        <Circuit1 />
        <SponsorBlob1 />
        <SponsorBlob2 />
      </div>
    );
  }
}

export default Stories;
