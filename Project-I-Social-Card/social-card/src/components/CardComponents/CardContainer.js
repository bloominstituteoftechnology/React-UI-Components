import React from 'react';
import './Card.css';
import './CardBanner'
import CardBanner from './CardBanner';
import CardContent from './CardContent';


function CardContainer(props){
    return(
    <div className="card-container">
        <CardBanner />
        <CardContent title="Get started with React" description="React make it painless to create interactive UIs. Design simple views for each state in your application."/>
    </div>
    )
}

export default CardContainer;