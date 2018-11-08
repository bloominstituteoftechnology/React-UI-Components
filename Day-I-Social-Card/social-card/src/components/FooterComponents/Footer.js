import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <p className={'footer'}>
      <span className={'awesome'}><i class="far fa-comment" onClick={() => alert('this was clicked')} /></span>
      <span className={'awesome'}><i class="fas fa-sync"  onClick={() => alert('and this')} /> 6</span>
      <span className={'awesome'}><i class="far fa-heart" onClick={() => alert('please stop clicking')} /> 4</span>
      <span className={'awesome'}><i class="far fa-envelope" onClick={() => alert('because alerts are annoying')} /></span>
    </p>
  );
}

export default Footer;