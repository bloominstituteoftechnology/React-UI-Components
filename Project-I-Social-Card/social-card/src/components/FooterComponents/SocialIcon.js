import React from 'react';

import './Footer.css';

const SocialIcon = props => {
  return (
    <div className="card__footer__social-icon">
      <input type="image" src={props.src} alt={props.alt} onClick={props.action} />
      <span className={props.hasHearted ? "card__footer__social-icon__counter" : "card__footer__social-icon__counter--hidden"}>1</span>
    </div>
  );
};

export default SocialIcon;