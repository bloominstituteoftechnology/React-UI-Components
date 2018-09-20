import React from 'react';
import './Header.css';


const ImageThumbnail = (props) => {
    return (
        <section className='thumbnail-container'>
            <img className='thumbnail' src={props.profileIcon}></img>
        </section>
    );
}

export default ImageThumbnail;