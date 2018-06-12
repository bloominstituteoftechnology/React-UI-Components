import React from 'react';
import './Card.css';

const CardContent = () => {
    return (
        <div className="card-body">
            <p className="card-title"><strong>Get started with React</strong></p>
            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p className="card-text">reactjs.org</p>
        </div>
    );
};

export default CardContent;