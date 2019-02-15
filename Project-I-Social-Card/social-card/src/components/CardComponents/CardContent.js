import React from 'react';
import './Card.css';

function CardContent() {
    return (
        <div className="contentContainer">
            <h3 className="mcTitle">Get started with React</h3>
            <p className="mcText">React makes it painless to create interactive UIs. Design 
                simple views for each state in your application.</p>
            <p className="url">reactjs.org</p>
        </div>
    )
}

export default CardContent

