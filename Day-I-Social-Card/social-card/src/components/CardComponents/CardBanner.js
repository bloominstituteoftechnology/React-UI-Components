import React from 'react';
import './Card.css';
import CardContent from './CardContent';

//Create a <CardBanner /> component that will display this image as 
//it's background: https://ibin.co/3wnC6SgIOJud.png

function CardBanner(){
    return (
        <a className="card-banner" href="https://www.reactjs.org">
            <img className="react-image" src="react-logo.png" alt="react logo"></img>
            <CardContent />
        </a>
    );
}


export default CardBanner;