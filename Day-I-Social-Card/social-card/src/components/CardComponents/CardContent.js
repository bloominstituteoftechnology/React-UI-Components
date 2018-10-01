import React from 'react';
import './Card.css';

const CardContent = props => { 
    return (
        <div className = 'cardContent'>
            <h4>Get started with React</h4>
            <p>React makes it painless to create interactive UIs. Design Simple views for
                each state in your application.</p>
            <h5>reactjs.org</h5>
        </div>
    );
}

export default CardContent;
