import React from 'react';

const AboutItem = props => {
  let button;
  if (props.hasBtn)
    button = (
      <a
        href={props.btn.url}
        role="button"
        className={`btn yellow-btn ${props.btn.size}`}
      >
        {props.btn.text}
      </a>
    );
  return (
    <div className="about-item">
      <img
        src={props.imgSrc}
        className={`col-sm-5 align-${props.floatDirection}-img`}
      />
      <div className={`offset-sm-1 col-sm-5 about-item-content align-${props.floatDirection}-text`}>
        <p className="about-item-title">{props.title}</p>
        <div dangerouslySetInnerHTML={{ __html: props.content }} />
        {button}
      </div>
    </div>
  );
};

AboutItem.defaultProps = {
  title: '',
  content: '',
  imgSrc: '',
  hasBtn: false,
  floatDirection: 'left'
};

export default AboutItem;
