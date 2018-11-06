import React from 'react';
import './Header.css';

function ImageThumbnail(props) {
    return (
    <div className='header-thumbnail'>
        <img src={props.source} alt={props.alt} />
    </div>
    )
};

export default ImageThumbnail;