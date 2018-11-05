import React from 'react';
import './Card.css';

function CardContent(props) {
    return (
        <div class='card-content' >
            <h2>Get Started with React</h2>

            <p>
                React make it painless to create interactive UIs. Design simple views for each state of your application.
            </p>

            <p><span>reactjs.org</span></p>
        </div >
    );
}

export default CardContent;