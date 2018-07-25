import React from 'react';
import './Card.css';

const CardContent = () => {
    return (
        <div className='d-flex flex-column'>
        <p className='card-heading'>Get started with React</p>
<p className = 'card-text'>React makes it painless to create interactive UIs. Design simple views for each state in your application.</p>
<p className = 'link'>reactjs.org</p>
        </div>
    );
}

export default CardContent;