import React from 'react';
import DynamicLink from '../dynamic-link';

const AboutItem = props => {
  let button;

  if (props.btn) {
    button = (
      <DynamicLink to={props.btn.url} role="button" className="about-item__cta">
        {props.btn.text}
      </DynamicLink>
    );
  }

  return (
    <div className={`about-item ${props.index % 2 === 0 ? 'left' : 'right'}`}>
      <img
        src={props.img.src}
        alt={props.img.alt}
        className={`about-item__img img-${props.index}`}
      />
      <div className="about-item__content">
        <p className="about-item__title">{props.title}</p>
        <p
          className="about-item__description"
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
  img: {},
  hasBtn: false,
  floatDirection: 'left'
};

export default AboutItem;
