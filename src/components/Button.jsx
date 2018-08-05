import React from 'react';

const Button = props => (
  <a href={props.url} role="button"className={`btn yellow-btn ${props.size}`}>{props.text}</a>
);

Button.defaultProps = {
  text: '',
  url: '/',
  size: 'md-btn'
}

export default Button;
