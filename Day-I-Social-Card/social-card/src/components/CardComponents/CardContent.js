import React from 'react';
import './Card.css';
import reactlogo from '../../images/react.png'

const CardContent = () => {
    return (
        <div id="card-content">
        <img src={reactlogo} alt="React Logo" />
        <h1>Get started with React</h1>
        <p>React makes it painless to create interactive UIs. Design simple views for 
            each state in your application.</p>
        <h2>reactjs.org</h2>
            </div>
    )
}

export default CardContent;