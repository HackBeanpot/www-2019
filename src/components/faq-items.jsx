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
    const childElements = this.props.FAQs.map(FAQ => (
      <div className="faq-masonry-element">
        <p className="faq-element-question">{FAQ.question}</p>
        <p
          className="faq-element-answer light-background"
          dangerouslySetInnerHTML={{ __html: FAQ.answer }}
        />
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
