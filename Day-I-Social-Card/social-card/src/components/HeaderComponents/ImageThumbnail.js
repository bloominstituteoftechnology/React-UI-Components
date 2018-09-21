import React from 'react';
import './Header.css';

const ImageThumbnail = () => {
    let imageSrc = 'https://i.postimg.cc/vT37XdYr/userimage.jpg';
    return <img className='user-image' src={imageSrc} alt='user image' />;
}

export default ImageThumbnail;