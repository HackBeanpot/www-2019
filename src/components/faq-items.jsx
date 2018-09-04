import React, { Component } from 'react';
import Masonry from 'react-masonry-component';

const masonryOptions = {
  gutter: 20 // Horizontal margin for masonry columns
};

class FAQItems extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        {this.props.FAQs.map(FAQ => (
          <div className="col-md-6 faq-question">
            <p className="faq-element-question">{FAQ.question}</p>
            <p className="faq-element-answer light-background">{FAQ.answer}</p>
          </div>
        ))}
      </div>
    );
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
