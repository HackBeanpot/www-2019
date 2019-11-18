import React, { Fragment } from 'react';

const Quote = props => (
  <Fragment>
    {!!props.quote ? (
      <div className="quote">
        <div className="quote-box" id={props.quoteId}>
          <span>"{props.quote.content}"</span>
        </div>
        <h6 className="quote__attribution noClick">
          {props.quote.attribution},{' '}
          <span className="quote__role noClick">{props.quote.role}</span>
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
