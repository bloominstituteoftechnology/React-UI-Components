import React from 'react';
import './Card.css';

const CardContent = () => {
   return (
    <div className="card-content">
        <h5>Get started with React</h5>
        <p>React makes it painless to create interactive UIs. Design simple views for each state in your application.</p>
        <p className="react-website-link">
            reactjs.org
        </p>
    </div>
   );
};

export default CardContent;