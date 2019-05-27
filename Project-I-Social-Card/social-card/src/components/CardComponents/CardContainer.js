import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent'

const cardTitle = 'Get started with React';
const cardPara = `React makes it painless to create interactive UIs. Design simple views
or each state in your application`;

function CardContainer () {
    return (
        <div>
            <CardBanner />
            <CardContent title = {cardTitle} text = {cardPara} />
        </div>
    )
}

export default CardContainer;