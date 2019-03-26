import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <p className={'footer'}>
      <span className={'num'}><i class="far fa-comment" onClick={() => alert(' clicked')} /></span>
      <span className={'num'}><i class="fas fa-sync"  onClick={() => alert('again')} /> 6</span>
      <span className={'num'}><i class="far fa-heart" onClick={() => alert('really again')} /> 4</span>
      <span className={'num'}><i class="far fa-envelope" onClick={() => alert('no more')} /></span>
    </p>
  );
}

export default Footer;