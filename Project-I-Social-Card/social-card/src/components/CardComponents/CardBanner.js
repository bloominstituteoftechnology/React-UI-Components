import React from 'react';
import './Card.css';

const backImage = {
  backgroundImage: 'url(https://tk-assets.lambdaschool.com/fcd75197-7d12-46ec-bc9e-4130f34822fa_reactbackground.png)',
  backgroundPosition: 'center',
  height: 400+'px',
}

function CardBanner() {
  return <div className='bannerImage' style= {backImage}></div>
}

export default CardBanner;