import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent'

const cardTitle = 'Get started with React';
const cardPara = `React makes it painless to create interactive UIs. Design simple views
or each state in your application.`;
const link = 'reactjs.org'

function CardContainer () {
    return (
        <div className= 'card-container' onClick = { () => {window.location.href = 'https://reactjs.org'}}>
            <CardBanner />
            <CardContent title = {cardTitle} text = {cardPara} link = { link } />
        </div>
    )
}

export default CardContainer;
