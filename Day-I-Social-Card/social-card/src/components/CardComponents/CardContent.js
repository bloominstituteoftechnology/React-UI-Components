import React from 'react';
import './Card.css';

function CardContent() {
    return (
        <div className="card-content">
            <p className="header">Get started with React</p>
            <p className="paragraph">React makes it painless to create interactive UIs. Design simple views for each state in your application.</p>
            <a href="https://reactjs.org/">reactjs.org</a>
        </div>
    )
}

export default CardContent;