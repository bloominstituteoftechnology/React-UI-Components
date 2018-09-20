import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

const CardContainer = (props) => {
    return (
        <a href="https://www.reactjs.org" className="CardContainer">
            <CardBanner />
            <CardContent 
                articleTitle="Get started with React"
                articleText="React makes it painless to create interactive UIs. Design simple views for each state in your application."
                articleLink="reactjs.org"
            />
        </a>
    );
};

export default CardContainer;