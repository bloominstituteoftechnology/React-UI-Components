import React from 'react';
import './Header.css';
import logo from '../../img/redLambda.jpg';

const ImageThumbnail = () => {
    return (
        <img id='profilePicture' src={logo} alt='profile image' />
    )
}

export default ImageThumbnail;
