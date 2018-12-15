import React from 'react';
import './Card.css';
import CardContent from "./CardContent";
import CardBanner from "./CardBanner";

const CardContainer = () => {
    return (
        <a href="https://www.reactjs.org" className="link-style">
            <CardBanner/>

            <CardContent/>
        </a>
    )
};

export default CardContainer;