import React from 'react';
import './Card.css';

const CardContent = () => {
    return (
        <div className="card-text">
            <h3>Get started with React</h3>
            <p>React makes it painless to create interactive UIs. Design simple views for each state in your application.</p>
            <a className="website" href="https://reactjs.org">reactjs.org</a>
        </div>
    )
}

export default CardContent;