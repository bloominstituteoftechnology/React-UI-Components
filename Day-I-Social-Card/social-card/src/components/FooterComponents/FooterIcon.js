import React from 'react';
import './Footer.css';

const FooterIcon = props => (
  <div className="footer-icon">
    <img  className="icon" src={props.iconImg} alt="icon"/>
    {props.count && <div className="count">{props.count}</div>}
  </div>
);

export default FooterIcon;