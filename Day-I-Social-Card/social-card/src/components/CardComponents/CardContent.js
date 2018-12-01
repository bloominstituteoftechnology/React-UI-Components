import React from 'react';
import './Card.css';

const CardContent = () => {
    return (
        <div className="cardContent">
            <h1 className="ccHeader">Get started with React</h1>
            <p className="ccParagraph">React makes it painless to create interactive UIs.
             Design simple views for each state in your application</p>
             <a href = "www.reactjs.org">reactjs.org</a>
        </div>
    );
}

export default CardContent;