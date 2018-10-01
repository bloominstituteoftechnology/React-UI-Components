import React from 'react';
import './Card.css';


const CardContent = props =>{
    return(
        <div>
            <p className='card-content-title'>Get started with React</p>
            <p className='card-content-body'>React makes it painless to create interactive UIs. Design simple views for each state in your application.</p>
            <p className='card-content-footer'>reactjs.org</p>
        </div>
    )
}

export default CardContent;
