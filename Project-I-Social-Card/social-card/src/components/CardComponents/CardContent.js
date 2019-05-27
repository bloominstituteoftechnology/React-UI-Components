import React from 'react';
import './Card.scss';

const CardContent = props => {
    return (
        <div className = 'cardContent'>
            <h2>Get started with React</h2>
            <p className = 'cardInfo'>
                React makes it painless to create Interactive UIs. Design simple views for each state in your application.
            </p>
            <p className = 'link'>reactjs.org</p>
        </div>
    );
}

export default CardContent;