import React from 'react';
import './Card.css';

const CardContent = () => {
    return(
        <div className = "content-bottom">
            <p className = "content-title">Get started with React</p>
            <p className = "content-info">React makes it painless to create interactice UIs. Design simple views for each state in your application</p>
            <a 
            href='http://react.js.org'
            className = "content-info link"
            >
            reactjs.org
            </a>
        </div>
    );
} ;

export default CardContent;