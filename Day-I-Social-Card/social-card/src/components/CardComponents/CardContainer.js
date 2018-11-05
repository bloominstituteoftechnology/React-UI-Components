import React from 'react';
import './Card.css';
import CardImg from './CardBanner';
import CardContent from './CardContent';

const CardContainer = () => {
    return (
        <div onclick="myFunction()" className="card-wrapper">
            <CardImg />
            <CardContent />
        </div>
    )
}

// const myClick = document.querySelector('.card-wrapper');

window.addEventListener("click", myFunction);
function myFunction() {
    window.open('https://reactjs.org')
  }

export default CardContainer;