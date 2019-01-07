import React from 'react';

import './Footer.css';

const SocialIcon = props => {
  return (
    <div className="card__footer__social-icon">
      <input type="image" src={props.src} alt={props.alt}/>
    </div>
  );
};

export default SocialIcon;