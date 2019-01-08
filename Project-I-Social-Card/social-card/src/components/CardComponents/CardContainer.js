import React from 'react';
import './Card.css';

import CardContent from './CardContent';

const CardContainer = () => {
    return (
      <div className="card-container">
        <img className="card-image" src="https://tk-assets.lambdaschool.com/fcd75197-7d12-46ec-bc9e-4130f34822fa_reactbackground.png" alt="the text if not displayed."></img>
        <CardContent />
      </div>
    );
  };

export default CardContainer;