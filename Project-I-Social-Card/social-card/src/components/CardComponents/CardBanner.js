import React from 'react';
import './Card.css';

import background from '../../images/reactbackground.png';

function CardBanner() {
  return (
    <div className="CardBanner">
      <img src={background} alt="" />
    </div>
  );
}

export default CardBanner;
