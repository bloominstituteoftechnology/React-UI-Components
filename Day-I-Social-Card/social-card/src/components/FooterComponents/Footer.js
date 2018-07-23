import React from 'react';
import './Footer.css';

const FooterAction = ({ iconClass, number }) => (
  <div className="Footer__action">
    <span className="Footer__icon">
      <i className={iconClass} />
    </span>
    {number ? <span className="Footer__number">{number}</span> : ''}
  </div>
);

const Footer = () => (
  <div className="Footer py-1">
    <FooterAction iconClass="far fa-comment" />
    <FooterAction iconClass="fas fa-sync" number={6} />
    <FooterAction iconClass="far fa-heart" number={4} />
    <FooterAction iconClass="far fa-envelope" />
  </div>
);

export default Footer;
