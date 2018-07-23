import React from 'react';
import './Card.css';

export const CardContent = () =>{
    return (
        <div className="cardBody">
        <div className="cardTitle"> Get started with React </div>
        <div className="cardBody"> React makes it painless to create ineractive UIs. Design simple views for each state in your application.</div>
        <div className="cardUrl" >react.js</div>
        </div>
    );
}