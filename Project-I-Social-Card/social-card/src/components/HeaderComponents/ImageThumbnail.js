import React from 'react';
import './Header.css';

function ImageThumbnail(props) {
    return (
        <img class="logo" src={props.imgSrc} />
    );
}

export default ImageThumbnail;