import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';
// import { prependOnceListener } from 'cluster';

function CardContainer (props) {
    return (
        <div className="card-container" onClick={(props)=> window.open('https://reactjs.org/', "_blank")}>
            <CardBanner src={props.src} />
            <CardContent header={props.header} text={props.text} link={props.link} />
        </div>
    );
}

export default CardContainer;