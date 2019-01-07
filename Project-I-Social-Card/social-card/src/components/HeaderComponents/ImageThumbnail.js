import React from 'react';
import './Header.css';
import Logo from './logo.jpg'

const ImageThumbnail = () =>{
    return (
        <div className="header-logo">
            <img src={Logo}/>
        </div>
    )
}

export default ImageThumbnail;
