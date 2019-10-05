import React from 'react';
import Quote from 'pages/stories/components/quote';

class Stories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuote: 0,
      quotes: [
        {
          content:
            'There was definitely a lot of support and direction, both with the staff and mentors from actual companies. If you wanted to do something and didn’t know how to do it, there was definitely people you could talk to that would help you learn how. HackBeanpot had a lot of people just giving talks about things in computer science that people may want to learn, and I feel like that was really cool because it was so easy to learn and pick up new things.',
          author: 'Shane',
          company: 'Attendee',
          imgSrc:
            'http://tools.hackbeanpot.com/assets/images/stories-portraits/shane.jpg'
        },
        {
          content:
            'I ... didn’t really feel at the same level as people who had been coding for a long time. I went in really scared, but while being there it was actually a really fun and enjoyable learning experience!',
          author: 'Olivia Petrillo',
          company: 'Attendee',
          imgSrc:
            'http://tools.hackbeanpot.com/assets/images/stories-portraits/olivia.jpg'
        },
        {
          content:
            'In terms of elements to bring to HackBeanpot, I think a big one is inclusivity. To the team that would mean making sure our team is inclusive of everyone’s opinions and perspectives… To the event I think diversity is important for encouraging people who don’t necessarily see themselves at a hackathon to participate and try something new.',
          author: 'Caitlin',
          company: 'Organizer',
          imgSrc:
            'http://tools.hackbeanpot.com/assets/images/stories-portraits/caitlin.jpg'
        },
        {
          content:
            'I had a really awesome time and I recommend anyone who’s interested in going to a hackathon to go to HackBeanpot. It was definitely a creative environment and even if you didn’t know much you could learn so much from the people there.',
          author: 'Kelsey Esposito',
          company: 'Attendee',
          imgSrc:
            'http://tools.hackbeanpot.com/assets/images/stories-portraits/kelsey.jpg'
        },
        {
          content:
            'If i could describe hackbeanpot in one word...invigorating. We had a lot of folks who weren’t sure what the experience would be like, and they left feeling united--Really energized and really impressed with the amount of talent that was on display as well as the atmosphere.',
          author: 'Rob',
          company: 'PowerAdvocate',
          imgSrc:
            'http://tools.hackbeanpot.com/assets/images/stories-portraits/rob.png'
        },
        {
          content:
            "HackBeanpot is the best hackathon I've been to, hands down….Being a mentor is super rewarding because I got to see a ton of projects go from the idea phase to a working demo.",
          author: 'Sanders',
          company: 'Past Organizer',
          imgSrc:
            'http://tools.hackbeanpot.com/assets/images/stories-portraits/sanders.png'
        }
      ]
    };
  }

  renderImages(quoteIndexes) {
    return quoteIndexes.map(index => {
      let bottom = 0;
      if (index == 1) bottom = '75px';
      if (index == 4) bottom = '-75px';
      let activeBorder = 'solid 5px #eeeeee';
      if (this.state.currentQuote == index) activeBorder = 'solid 5px #fad20a';
      return (
        <div style={{ width: '33%', bottom: bottom }}>
          <div
            className="stories-round-image center"
            style={{ border: activeBorder }}
          >
            <img
              className="portrait"
              src={this.state.quotes[index].imgSrc}
              onClick={() => {
                this.setState({ currentQuote: index });
              }}
            />
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="pale-blue-bg stories-welcome">
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
          <div className="row top-images">{this.renderImages([0, 1, 2])}</div>
          <Quote quote={this.state.quotes[this.state.currentQuote]} />
          <div className="row bottom-images">
            {this.renderImages([3, 4, 5])}
          </div>
        </div>
      </div>
    );
  }
}

export default Stories;
