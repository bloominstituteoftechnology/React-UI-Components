import React from 'react';
import './Header.css';
import lambdaImg from './lambdacrest.png'

const ImageThumbnail = () => {
    return (
        <div className="img">
            <img className="logo" src={lambdaImg} alt="lambda logo" />
        </div>
    );
  };

  export default ImageThumbnail;