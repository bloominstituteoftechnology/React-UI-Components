import React from 'react';
import './Card.css';

const CardContent = () => {
    return (
        <div className="cardContent">
        <p><strong>Get started with React</strong></p>
        <p>React makes it painless to create interactive UIs. Design simple views for each state in your application.</p>
        <a href="reactjs.org"></a>
        </div>
    );
}

export default CardContent;