import React, { Fragment } from 'react';

const Quote = props => (
  <Fragment>
    {!!props.quote ? (
      <div className="quote-box-container">
        <div className="quote-box" id={props.quoteId}>
          <span className="noClick">"{props.quote.content}"</span>
        </div>
        <h6 className="stories-quote-from noClick">
          {props.quote.attribution},{' '}
          <span className="noClick">{props.quote.role}</span>
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
