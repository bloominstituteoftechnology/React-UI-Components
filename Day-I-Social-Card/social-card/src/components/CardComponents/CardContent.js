import React from 'react';
import './Card.css';

const CardContent = () => {
    return (
        <div className = 'cardContent'>
            <a href = 'https://www.reactjs.org'>
                <h2>Get started with React</h2>
                <p>
                    React makes it painless to create interactive UIs. Design simple views for
                    each state in your application
                </p>
                <p className = 'siteAddress'>reactjs.org</p>
            </a>
        </div>
    )
}

export default CardContent;