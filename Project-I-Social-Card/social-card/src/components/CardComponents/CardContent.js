import React from 'react';
import './Card.css';

const CardContent = () => {
    return (
        <div className='card-content'>
            <h3 className = 'card-content-style'>Get Started with React</h3>
            <p className = 'card-content-style'>React makes it painless to create interactive UIs.
                Design simple views for each state in your application.</p>
            <a href='https://www.reactjs.org' className = "link-style">Reactjs.org</a>
        </div>
    )
};

export default CardContent;
