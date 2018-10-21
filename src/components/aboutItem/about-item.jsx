import React from 'react';

const AboutItem = props => {
  let button;
  if (props.btn)
    button = (
      <a
        href={props.btn.url}
        role="button"
        className={`btn yellow-btn ${props.btn.size}`}
        target="_blank"
      >
        {props.btn.text}
      </a>
    );
  return (
    <div className="about-item">
      <img
        src={props.imgSrc}
        className={`col-md-5 about-image align-${props.floatDirection}-img`}
      />
      <div
        className={`col-md-7 about-item-content align-${
          props.floatDirection
        }-content`}
      >
        <p className="about-item-title">{props.title}</p>
        <div
          className="about-item-description"
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
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
