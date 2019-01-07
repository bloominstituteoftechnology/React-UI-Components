import React from 'react';
import './Header.css';
import logo from "./lambda-logo.jpg"

function ImageThumbnail (){
    return(
        <img src={logo} alt="lambda-logo" width="55px" height="55px" />
    )
}

export default ImageThumbnail;