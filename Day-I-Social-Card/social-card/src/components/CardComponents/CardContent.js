import React from 'react';
import './Card.css';

const CardContent = () => {
    return(
        <React.Fragment>
            <h2 className='card-header'>
                Get started with React
            </h2>
            <p className='card-text'>
                React makes it painless to create interactive UIs. 
                Desing simple views for each state in your application. </p>
            <p className='website'>reactjs.org
            </p>
        </React.Fragment>
    );
};

export default CardContent;