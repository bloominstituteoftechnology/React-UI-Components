import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';
// import { getPortPromise } from 'portfinder';
// import { prependOnceListener } from 'cluster';

function CardContainer (props) {
    return (
        <a className="card-container" href={props.redirect} target="blank/">
            <CardBanner src={props.src} />
            <CardContent header={props.header} text={props.text} link={props.link} />
        </a>
    );
}

export default CardContainer;