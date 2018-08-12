import React, { Component } from 'react';
import Masonry from 'react-masonry-component';

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

    return <Masonry>{childElements}</Masonry>;
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
