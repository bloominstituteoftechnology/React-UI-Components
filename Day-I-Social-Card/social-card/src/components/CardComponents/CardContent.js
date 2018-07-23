import React from 'react';
import './Card.css';

const CardContent = () => {
    return(
        <div className = "cardContent">
            <h1 className = "cardContent-header">Get Started With React</h1>
            <p className ="cardContent-text">React makes it painless to create interactive UIs. Design simple views for each state in youor application</p>
            <a className = "cardContent-link" href = "https://www.reactjs.org">reactjs.org</a>
        </div>
    )
}

export default CardContent;