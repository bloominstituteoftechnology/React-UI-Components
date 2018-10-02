import React from 'react';
import './Footer.css';

const FooterIcon = props => {
  return (
    <div onClick={props.handleFooterClick} className="FooterIcon">
      <i className={props.icon} />
      <span className="FooterIcon__span">{props.number}</span>
    </div>
  );
};

export default FooterIcon;
