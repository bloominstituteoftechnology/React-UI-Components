import React from 'react';
import './Card.css';

const CardBanner = props => { // props = { type: "primary"}

    return (
      <div> 
        <img class = 'banner-logo' src="https://ibin.co/3wnC6SgIOJud.png" alt="React Logo"/>
      </div>
    );
}

export default CardBanner;