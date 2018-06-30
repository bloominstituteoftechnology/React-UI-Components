import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';



const CardContent= () => {
    return (
        <div className="card-content">
            <CardBanner />
            <h5>Get started with React</h5>
            <p>React makes it painless to create interactive UIs. Design simple views for each state in your application.</p>
            <span>reactjs.org</span>        
        </div>
    );
};

export default CardContent;