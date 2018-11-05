import React from 'react';
import './Card.css';

//Create a <CardContent /> component that displays the card copy provided.

function CardContent(props){
    return (
        <div className="card-content">
            <h1>Get started with React</h1>
            <p>React makes it painless to create interactive UIs. Design simple views for each state in your application</p>
            <p className="react-url">reactjs.org</p>
        </div>
    );
}

export default CardContent;