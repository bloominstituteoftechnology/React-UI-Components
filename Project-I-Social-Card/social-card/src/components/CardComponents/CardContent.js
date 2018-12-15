import React from 'react';
import './Card.css';

const CardContent = () => {
    return (
        <div className='card-content'>
            <div className="content">
                <h2 className="card-text">Get Started with React</h2>
                <p className="card-text">React makes it painless to create interactive UIs. Design simple views for each
                    state in your application.</p>
                <p className="card-text react-link">reactjs.org</p>
            </div>
        </div>
    )
};

export default CardContent;