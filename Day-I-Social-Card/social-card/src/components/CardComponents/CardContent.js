import React from 'react';
import './Card.css';


const CardContents = props => {
    return (
        <div className="main-text">
        <h1>Get started with React</h1>
        <p>React makes it painless to create interacrive UIs. 
           Design simple views for each state in your application.</p>
        <a href="https://www.reactjs.org">reactjs.org</a>
        </div>
    );
}

export default CardContents;