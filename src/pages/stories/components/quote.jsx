import React, { Fragment } from 'react';

const Quote = props => (
  <Fragment>
    {!!props.quote ? (
      <div className="quote-box">
        <img
          src={props.imgSrc}
          className={`col-md-5 about-image align-${props.floatDirection}-img`}
        />
        <p>"{props.quote.content}"</p>
        <h6>
          - {props.quote.author},{' '}
          <span className="stories-quote-from">{props.quote.company}</span>
        </h6>
      </div>
    ) : null}
  </Fragment>
);

Quote.defaultProps = {
  quote: null,
  imgSrc: '',
  hasBtn: false,
  floatDirection: 'left'
};

export default Quote;
