import React from 'react';
import './Card.css';

function CardContent () {
    return(
        <div className="CardContent">
            <h2>Get Started with React</h2>
            <p>React makes it painless to create interactive UIs.  Design simple views for each state in your application.</p>
            <p className="reactLink">reactjs.org</p>
        </div>
    )
}

export default CardContent;