import React from 'react';
import './Header.css';

const ImageThumbnail = (props) => {
    return (
        <img src = {props.uri} className = {props.imgClass} />
    );
}

export default ImageThumbnail;