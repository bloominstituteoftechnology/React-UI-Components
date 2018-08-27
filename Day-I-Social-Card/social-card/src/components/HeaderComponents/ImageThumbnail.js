import React from 'react';
import './Header.css';

const ImageThumbnail = (props) => (
    <div className="image-thumbnail-div">
        <img className="image-thumbnail" alt="Lambda logo" src={props.src} />
    </div>
);

export default ImageThumbnail;
