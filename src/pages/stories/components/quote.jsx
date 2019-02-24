import React, { Fragment } from 'react';

const Quote = props => (
  <Fragment>
    {!!props.quote ? (
      <div className="quote-box" id={props.quoteId}>
        <i className="noClick">"{props.quote.content}"</i>
        <h6 className="stories-quote-from noClick">
          - {props.quote.author},{' '}
          <span className="noClick">{props.quote.company}</span>
        </h6>
      </div>
    ) : null}
  </Fragment>
);

Quote.defaultProps = {
  quote: null,
  hasBtn: false
};

export default Quote;
