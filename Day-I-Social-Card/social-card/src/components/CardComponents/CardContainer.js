import React from 'react';
import './Card.css';
import CardBanner from './CardBanner.js'
import CardContent from './CardContent.js'

const CardContainer = (props) => {
  return (
    <div className='card-container' onClick={() => window.open('http://www.reactjs.org')}>
        <CardBanner banner={props.banner} />
        <CardContent title={props.title} link={props.link} />
    </div>
  );
}

export default CardContainer;