import React from 'react';
import Flickity from 'react-flickity-component';

import Quotes from 'data/quotes.json';
import Quote from 'pages/stories/components/quote';

const flickityOptions = {
  wrapAround: false,
  prevNextButtons: true,
  pageDots: true,
  adaptiveHeight: true
};

class StoriesMobile extends React.Component {
  renderQuotes() {
    return Quotes.map((person, index) => {
      return (
        <div key={`stories-${index}`} className="stories-carousel-cell">
          <div className="stories-circles__img-container">
            <img
              className="stories-circles__img"
              src={person.imgSrc}
              alt={person.name}
            />
          </div>
          <Quote quote={person} />
        </div>
      );
    });
  }

  render() {
    if (typeof window !== 'undefined') {
      return (
        <Flickity
          className={'stories-mobile stories-carousel'}
          options={flickityOptions} // takes flickity options {}
        >
          {this.renderQuotes()}
        </Flickity>
      );
    } else {
      return null;
    }
  }
}

export default StoriesMobile;
