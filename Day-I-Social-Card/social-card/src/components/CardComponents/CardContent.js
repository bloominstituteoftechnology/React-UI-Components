import React from 'react';
import './Card.css';
import People from './people';

const CardContent = (props) => {
    return ( 
        <div className='card-content'>
            <h2>Get Started with React {props.passing.name}</h2>
            <p>React makes it painless to create interactive UI's.
            Design simple views for each state in your application.</p>
        </div>
     );
}
 
export default CardContent;
