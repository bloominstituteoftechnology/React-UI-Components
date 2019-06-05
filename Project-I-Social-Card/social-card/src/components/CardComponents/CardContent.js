import React from 'react';
import './Card.css';

// Create a <CardContent /> component that displays the card copy provided.

function CardContent(){
    return (
        <div className="card-content">
            <h3 className="h3">Get started with React</h3>
            <p>React makes it painless to create interactive UIs. Design simple views for each state in your application.</p>
            <p className="reactOrg">reactjs.org</p>
        </div>
    );
}

export default CardContent;
