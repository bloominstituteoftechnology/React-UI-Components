import React from 'react';
import './Card.css';
import image from './img/react.png';
import CardContent from './CardContent';
import CardBanner from './CardBanner';

function CardContainer() {
    return (
        <React.Fragment>
            <CardBanner src = {image} alt = 'React Logo' />
            <CardContent title = 'Get Started with React' source = 'reactjs.org' content = 'React makes it painless to create interactive UIs. Design simple views for each state in your application.' />
        </React.Fragment>
    );
}

export default CardContainer;