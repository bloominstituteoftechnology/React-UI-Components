import React from 'react';
import './Card.css';

const CardContent = () => {
    return (
        <div className="card-content">
            <p className="card-text1">Get Started with React</p>
            <p className="card-text2">React makes it painless to create interactive UIs.  Design simple views for each state in your application.</p>
            <a className="card-link" href="https://reactjs.org">reactjs.org</a>
        </div>
    )
}

export default CardContent;