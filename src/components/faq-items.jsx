import React, { Component } from 'react';
import Masonry from 'react-masonry-component';

const masonryOptions = {
    gutter: 10 // Horizontal margin for masonry columns
};

class FAQItems extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const childElements = this.props.FAQs.map(FAQ => (
      <div className="faq-masonry-element">
        <h4>{FAQ.question}</h4>
        <p>{FAQ.answer}</p>
      </div>
    ));

    return <Masonry options={masonryOptions}>{childElements}</Masonry>;
  }
}
FAQItems.defaultProps = {
  FAQs: [
    {
      question: '',
      answer: ''
    }
  ]
};

export default FAQItems;
