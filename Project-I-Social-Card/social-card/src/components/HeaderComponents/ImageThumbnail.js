import React from 'react';
import './Header.css';
import logo from "./lambda-logo.jpg"

function ImageThumbnail (){
    return(
        <img className="headerImage" src={logo} alt="lambda-logo" width="55px" height="55px" />
    )
}

export default ImageThumbnail;