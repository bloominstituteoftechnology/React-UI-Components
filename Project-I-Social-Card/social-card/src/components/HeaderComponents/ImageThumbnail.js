import React from 'react';
import './Header.css';

const ImageThumbnail = props => (
    <img className='thumbnail' src={props.thumbnail.src} alt={props.thumbnail.alt}/>
)

export default ImageThumbnail