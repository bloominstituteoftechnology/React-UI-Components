import React from 'react';
import './Card.css';

const CardContent = () => {
    let cardHeading = 'Get started with React';
    let cardText = 'React makes it painless to create interactive UIs. Design simple views for each state in your application.';
    let cardLink = 'reactjs.org';

    return (
        <div className='card-content'>
            <h2 className='content-heading'>{cardHeading}</h2>
            <p className='content-text'>{cardText}</p>
            <a className='content-link'>{cardLink}</a>
        </div>
    );
};

export default CardContent;