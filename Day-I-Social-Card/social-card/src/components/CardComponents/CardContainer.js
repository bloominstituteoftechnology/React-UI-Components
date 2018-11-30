import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

const CardContainer = (props) => {
    return (
        <div className="card">
            <a href="https://www.reactjs.org/" target="_blank" className="cardLink">
                <CardBanner />
                <CardContent />
            </a>
        </div>
    )
}

// const cardClick = document.querySelector('.card');

// cardClick.addEventListener('click', ()=>{
//     document.location = "https://www.reactjs.org/";
// })

export default CardContainer;