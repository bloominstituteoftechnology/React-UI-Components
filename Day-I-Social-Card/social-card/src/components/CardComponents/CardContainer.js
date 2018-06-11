import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent'

const CardContainer = () => {
  return(
    <div className="row">
      <div className="col-sm-1">
      </div>
      <div className="col-sm-11">
        <CardBanner />
        <CardContent />
      </div>
    </div>
  )
}

export default CardContainer