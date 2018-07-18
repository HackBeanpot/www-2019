import React, { Fragment } from 'react';

class Quote extends React.Component {
  render() {
    return (
      <Fragment>
        {!!this.props.quote ? (
          <div className="rounded quote-box">
            <p>"{this.props.quote}"</p>
            <h6>
              - {this.props.author},{' '}
              <span className="stories-quote-from">{this.props.from}</span>
            </h6>
          </div>
        ) : null}
      </Fragment>
    );
  }
}

export default Quote;
