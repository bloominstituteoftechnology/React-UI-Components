import React from 'react';
import './Card.css';
import Jumbo from './img/ReactLogo.png';

const CardBanner = (props) => {
  return (
  <img src={Jumbo} className='cardBanner' alt='' />);
}

export default CardBanner;