import React from 'react';
import Thumbnail from '../../img/lambda-logo.jpg'
import './Header.css';

const ImageThumbnail = () => {
    return(
        <img src={Thumbnail} alt="" className="thumbnail"/>
    )
}

export default ImageThumbnail