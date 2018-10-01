import React from 'react';
import './Card.css';

const CardContent = props =>{
    return(
        <div className="cardContent">
            <h2>Get Started With React</h2>
            <p>React makes it painless to create interactive UI's. Design simple views for each
                state in your application
            </p>
            <p>reactjs.org</p>
        </div>
    );
}
export default CardContent;
