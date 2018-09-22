import React from 'react';
import './Header.css';

const ImageThumbnail = props => (
    <div className="header-image-div">
        <img className="header-image" src={props.image}></img>
    </div>
);

export default ImageThumbnail;