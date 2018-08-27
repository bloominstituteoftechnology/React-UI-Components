import React from 'react';
import './Header.css';

const ImageThumbnail = () => {
    let imageSrc = 'https://pbs.twimg.com/profile_images/973277209644249089/0Te2jtBH_400x400.jpg';
    return <img className="user-image" src={imageSrc} alt="User Image"/>;
}

export default ImageThumbnail;
