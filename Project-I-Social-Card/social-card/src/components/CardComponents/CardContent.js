import React from 'react';
import './Card.css';


const CardContent = props => {
    return (
        <a target="_blank" href="https://reactjs.org/" className='cardBanner'>
            <h2>
                Get Started with React
            </h2>
            <p>
                React makes it painless to create interactive UIs. Design simple viers for each state in your application.
            </p>
            <small className='source'>
                <a target="_blank" href="https://reactjs.org/">reactjs.org</a>
            </small>
        </a>
    )
}

export default CardContent;