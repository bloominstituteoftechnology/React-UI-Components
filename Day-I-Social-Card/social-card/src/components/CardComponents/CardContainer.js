import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

const CardContainer = (props) => {
    return (
        <div className="cardContainer">
            <a href="https://www.reactjs.org">
                <CardBanner />
                <CardContent 
                    articleTitle="Get started with React"
                    articleText="React makes it painless to create interactive UIs. Design simple views for each state in your application."
                    articleLink="reactjs.org"
                />
            </a>
        </div>
    );
};

export default CardContainer;