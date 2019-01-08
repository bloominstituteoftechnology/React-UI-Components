import React from 'react';
import './Card.css';

const CardTitle = () => <h1 className="card-title">Get started with React</h1>
const CardURL = () => <a className="card-url" href="https://www.reactjs.org">reactjs.org</a>
const CardText = () => <p classname="card-text">React makes it painless to create interactive UIs. Design simple views for each state in your application.</p>

const CardContent = () => {
    return (
        <div className="card-content">
            <CardTitle />
            <CardText />
            <CardURL />
        </div>
    );
};

export default CardContent;
