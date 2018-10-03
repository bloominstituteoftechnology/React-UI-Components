import React from 'react';
import './Card.css';
import CardBanner from "./CardBanner";
import CardContents from './CardContent';

const CardContainer = props => {
    return (
        <div className="main-box">
        <a className="link" href="https://www.reactjs.org">
            <CardBanner />
            <CardContents />
        </a>
        </div>
    );
}


export default CardContainer;