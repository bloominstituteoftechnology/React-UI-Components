import React from 'react';
import './Card.css';

const CardContent = () => {
    return (
        <div className="cardContent">    
            <p><strong>Get started with React</strong></p>
            <p>React makes it painless to create interactive UIs. Dsign simple views for each state in your application.</p>
            <p><span class="details">reactjs.org</span></p>
        </div> 
    );
}

export default CardContent;