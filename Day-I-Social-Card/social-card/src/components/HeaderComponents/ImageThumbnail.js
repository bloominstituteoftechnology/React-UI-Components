import React from 'react';
import './Header.css';

const ImageThumbnail = props => {
    return(
        <img src={props.image} className="thumbnail"/>
    )
}

export default ImageThumbnail;