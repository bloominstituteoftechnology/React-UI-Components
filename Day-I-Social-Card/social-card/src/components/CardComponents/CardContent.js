import React from 'react';
import './Card.css';

const CardContent = () => {
    return ( 
        <div className="banner-content">
        <h1>Get started with React</h1>
        <p>React makes it painless to create 
            interactive UIs. Design simple views for each state 
            in your application. 
        </p>
        <p className="mini-txt">reactjs.org</p>
        </div>   
    );
}

export default CardContent;
