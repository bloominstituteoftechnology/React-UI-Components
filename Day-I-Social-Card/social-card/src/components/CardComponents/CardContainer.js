import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

const CardContainer = (props) => {
    return (
        <div className="card">
          <CardBanner />
          <CardContent />
        </div>
    )
}

// const cardClick = document.querySelector('.card');

// cardClick.addEventListener('click', ()=>{
//     document.location = "https://www.reactjs.org/";
// })

export default CardContainer;