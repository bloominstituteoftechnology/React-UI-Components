import React from 'react';
import './Footer.css';

const FooterIcon = props => (
  <div className="footer-icon" onClick={props.onClick}>
    <img className="icon" src={props.iconImg} alt="icon"/>
    {props.count > 0 && <div className="count">{props.count}</div>}
  </div>
);

export default FooterIcon;