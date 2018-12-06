import React from 'react';
import './Header.css';
import img from './Lambdaimage.png';

const ImageThumbnail = () => {
    return (
        <div>
            <img className='thumbnail' src={img} />;
        </div>
    )
}

export default ImageThumbnail;