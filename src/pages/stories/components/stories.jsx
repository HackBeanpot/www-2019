import React, { Fragment } from 'react';
import Quote from 'pages/stories/components/quote';
import Quotes from 'data/quotes.json';

class Stories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuote: 0
    };
  }

  renderImages(quoteIndexes) {
    return quoteIndexes.map(index => {
      let bottom = 0;
      if (index == 1) bottom = '75px';
      if (index == 4) bottom = '-75px';
      return (
        <div key={`stories-${index}`} style={{ width: '33%', bottom: bottom }}>
          <div
            className={
              (this.state.currentQuote == index
                ? 'stories-round-image__selected '
                : '') + 'stories-round-image center'
            }
          >
            <img
              className="portrait"
              src={Quotes[index].imgSrc}
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
      <Fragment>
        <div className="row top-images">{this.renderImages([0, 1, 2])}</div>
        <Quote quote={Quotes[this.state.currentQuote]} />
        <div className="row bottom-images">{this.renderImages([3, 4, 5])}</div>
      </Fragment>
    );
  }
}

export default Stories;
