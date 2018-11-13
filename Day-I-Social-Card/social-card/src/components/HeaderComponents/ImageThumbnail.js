import React from 'react';
import './Header.css';
import '../../App.css';

const ImageThumbnail = () => {
    return (
        <div className='image-thumbnail'>
            <img
                alt= 'Lambda logo'
                className='thumb-img'
                src='https://ibin.co/3whrpKSBbZ81.png'
                />
        </div>
    );
}

export default ImageThumbnail;
