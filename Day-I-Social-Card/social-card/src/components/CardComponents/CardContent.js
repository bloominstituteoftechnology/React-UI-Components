import React from 'react';
import './Card.css';

const CardContent = props => {
    return (
        <div className="card-content">
            <h4>Get started with React</h4> 
            <p className="card-para">React makes it painless to create interactive UIs. Design simple views for each state in your application.</p>
            <p className="card-url">reactjs.org</p>
        </div>
    )
}
export default CardContent;