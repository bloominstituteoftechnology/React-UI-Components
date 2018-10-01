import React from 'react';
import './Header.css';

const ImageThumbnail = props => {
    return (
        <img src={props.src} alt="thumbnail" className='thumbnail'/>
    );
}

export default ImageThumbnail;