import React from 'react';
import './Card.css';
import CardBanner from './CardBanner'
import CardContent from './CardContent';

function react() {
    window.open('https://www.reactjs.org');
  }

const CardContainer = ()=> {
    return (
        <div id="card-container" onClick={react}><CardBanner /><CardContent /></div>
    );
};

export default CardContainer;