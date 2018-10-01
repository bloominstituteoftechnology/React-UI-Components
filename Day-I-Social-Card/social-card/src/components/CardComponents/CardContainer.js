import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

const CardContainer = props => {
    return (
        <div className="card-container">
            <CardBanner image="https://ibin.co/3wnC6SgIOJud.png"/>
            <CardContent title="Get started with React" content="React makes it painless to create interactive UIs. Design simple view for each state in your application." link="reactjs.org" />
        </div>
    );
};

export default CardContainer;
