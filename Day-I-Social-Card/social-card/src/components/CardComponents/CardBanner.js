import React from 'react';
import './Card.css';

const CardBanner = props => {
  const imgStyle = {
    border: '0',
  }
  return (
  <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
    <img src="https://ibin.co/3wnC6SgIOJud.png" alt="React logo" style={imgStyle} />
  </a>
  );
};

export default CardBanner;
