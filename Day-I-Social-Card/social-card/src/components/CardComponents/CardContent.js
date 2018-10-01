import React from 'react';
import './Card.css';


const CardContent = () =>{
    return (
    <div className="contentContainer">
        <h2 className='contentHeader'>Get started with React</h2>
        <p className='contentText'>React makes it painless to create interactive UIs. Design simple views for each state in your applicaton</p>
        <p className="contentLink">reactjs.org</p>
    </div>
    );
};

export default CardContent