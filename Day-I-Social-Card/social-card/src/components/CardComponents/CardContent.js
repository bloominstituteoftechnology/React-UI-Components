import React from 'react';
import './Card.css';

const CardContent = (props) => {
    return (
        <div className="cardContent">
        <p className="bold">Get started with React</p>
        <p>React makes it painless to create interactive UIs.  Design simple views for each state in your application</p>
        <p className="lightGrey">reactjs.org</p>

        </div>
    );
};

export default CardContent;