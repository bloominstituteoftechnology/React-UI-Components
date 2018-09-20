import React from 'react';
import './Card.css';

const CardContent = (props)  => {
    return(
        <div className="card-content">
            <div className="content-title">
                Get Started With React
            </div>
            <div className="content-content">
                React makes it painles to create interactive UIs. Design simple views for each state in your application.
            </div>
            <div className="content-footer">
                reactjs.org
            </div>
        </div>
    )
}

export default CardContent;
