import React from 'react';
import './Card.css';
import CardContent from "./CardContent"


function CardContainer() {
    return (
        <div className="cardcontainer">
        <a href="https://www.reactjs.org">
        <CardContent /> </a>
        </div>
    )
};

export default CardContainer;