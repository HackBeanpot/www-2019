import React from 'react';
import Quote from 'pages/stories/components/quote';

class Stories extends React.Component {
  constructor(props) {
    super(props);
    this.state = { quote: 'placeholder quote', author: 'someone', from: 'NEU' };
  }

  render() {
    return (
      <div>
        <h1>Stories</h1>
        <h3>Some inspirational byline</h3>
        {/* TODO: Create story modals */}
        <Quote
          quote={this.state.quote}
          author={this.state.author}
          from={this.state.from}
        />
      </div>
    );
  }
}

export default Stories;
