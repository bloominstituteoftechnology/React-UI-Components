import React from 'react';
import './Header.css';
import LambdaLogo from './lambdacrest.png';

function ImageThumbnail(prop) {
    return <img className='lambda' src= {LambdaLogo} alt='Dinner On Bottom' />;
}

export default ImageThumbnail;