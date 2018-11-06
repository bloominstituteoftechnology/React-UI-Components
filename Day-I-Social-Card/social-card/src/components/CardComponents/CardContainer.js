import React from 'react';
import './Card.css';
import CardImg from './CardBanner';
import CardContent from './CardContent';

const CardContainer = () => {
    return (
        <div onClick={myFunction} className="card-wrapper">
        <CardImg />
        <CardContent />
        </div>
    )
}

function myFunction() {
    window.open('https://reactjs.org')
}

export default CardContainer;