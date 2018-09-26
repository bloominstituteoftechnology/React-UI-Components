import React from 'react';
import './Card.css';

const CardContent = props => {
    return (
        <div className ="card-content-wrapper">
            <div className = "card-content-header">Get started with React</div>
            <div className = "card-content">React makes it painless to create interactive UIs. Design simple views for each state in your application.</div>
            <div className = "card-content-footer">reactjs.org</div>
        </div> 
       

    );
};

export default CardContent;
