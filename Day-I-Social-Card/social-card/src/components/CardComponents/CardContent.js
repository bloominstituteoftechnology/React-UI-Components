import React from 'react';
import './Card.css';


const CardContent = props => {
    return (
        <div className="CardContent">
           <h2>Get started with React</h2>
           <p>React makes it painless to create interactive UIs. Design simple views for each state in your application.</p>
           <p id="lighter">react.js</p>
        </div>
    );
};

export default CardContent;