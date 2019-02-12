import React from 'react';
import './Card.css';

const CardContent = () => {
    return (
        <div className="cardContent">
            <h2>Get started with React</h2>
            <p className="contentP">React makes it painless to create interactive UIs. 
                Design simple views for each state in your application.
            </p>
            <p className="linkP">reactjs.org</p>
        </div>
     );
};

export default CardContent;