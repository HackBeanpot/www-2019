import React from 'react';
import Link from 'gatsby-link';
import Button from '../Button';
import './AboutItem.css';

const AboutItem = props => {
  let button;
  if (props.hasBtn) {button = <Button text={props.btn.text} url={props.btn.url} size={props.btn.size}/>;}
  
  return (
  <div className="" style={{ clear: 'both' }}>
    <img
      src="https://hackbeanpot.com/img/wmud/IMG_0299.jpg"
      className={`align-${props.floatDirection}-img`}
    />
    <div className="about-item-content">
      <h3>{props.header}</h3>
      {props.content}
      {button}
    </div>
  </div>
)};

AboutItem.defaultProps = {
  header: 'AboutItem section header',
  content: 'AboutItem section content',
  pageLink: '/',
  floatDirection: 'left'
};

export default AboutItem;
