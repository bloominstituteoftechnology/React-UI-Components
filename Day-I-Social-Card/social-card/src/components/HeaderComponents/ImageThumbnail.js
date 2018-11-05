import React from 'react';
import './Header.css';

function ImageThumbnail (props){
    return(
        <img className="logo" src = {props.src} alt ='Lambda Logo'/>
    );
}

export default ImageThumbnail;