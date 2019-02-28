import React from 'react';
import './Header.css';

const ImageThumbnail = props => (
    <div className='thumbnail-container'>
        <div className='thumbnail-background'></div>
        <img className='thumbnail' src={props.thumbnail.src} alt={props.thumbnail.alt}/>
    </div>
)

export default ImageThumbnail