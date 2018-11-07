import React from 'react';
import './Header.css';

function ImageThumbnail (props){
    return(
        <div>
        <img className="logo" src = {props.src} alt ='Lambda Logo'/>
        </div>
    );
}

export default ImageThumbnail;