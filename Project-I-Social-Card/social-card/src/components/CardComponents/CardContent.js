import React from 'react';
import './Card.css';

const CardContent = () => {
    return (
        <div className="card-content">
            <h1 className="card-title">Get started with React</h1>
            <p className="card-paragraph">React makes it painless to create interactive UIs. Design simple
             views for each state in your application</p>

            <a className="card-small-text" href="https://www.reactjs.org">reactjs.org</a>
        </div>
    );
};


export default CardContent;