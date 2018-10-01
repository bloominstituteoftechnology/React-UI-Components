import React from 'react';
import './Header.css';
import logo from '../../img/redLambda.jpg';

const ImageThumbnail = () => {
    return (
        <div class='imgWrapper'>
            <img id='profilePicture' src={logo} alt='profile' />
        </div>
    )
}

export default ImageThumbnail;
