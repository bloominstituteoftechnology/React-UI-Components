import React from 'react';
import './Card.css';

const CardContent = (props) => {
    return (
            <div className='cardContent'>
                <h2>Get start with React</h2>
                <p>React makes it painless to create interactive UIs. Design simple views for each state in your application.</p>
                <a href='https://www.reactjs.org' target='_target'><p className='originLink'>reactjs.org</p></a>
            </div>
    );
}

export default CardContent;