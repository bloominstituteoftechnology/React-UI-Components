import React from 'react';
import './Card.css';

const CardContent = () => {
    return (
        <div className='mainContent--container'>
            <h2>Get started with React</h2>
            <p className='mainContent--text'>React makes it painless to create interactive UIs. Design Simple views for each state in you application</p>
            <p className='mainContent--web'><a href='https://reactjs.org' target='_blank'>reactjs.org</a></p>
        </div>
    )
}
export default CardContent;