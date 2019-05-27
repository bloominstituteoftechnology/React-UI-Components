import React from 'react';
import './Header.css';

const url = 'https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png'

function ImageThumbnail() {
    return (
        <div className = 'img'>
            <img src={url} alt='logo' />
        </div>
    )
}

export default ImageThumbnail;
