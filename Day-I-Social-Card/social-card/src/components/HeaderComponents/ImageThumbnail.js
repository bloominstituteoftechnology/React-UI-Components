import React from 'react';
import './Header.css';

const ImageThumbnail = () => {
    return (
        <div className="thumb-wrapper">
            <img 
                src="https://pbs.twimg.com/profile_images/973277209644249089/0Te2jtBH_400x400.jpg"
                alt="lambda thumbnail image"
                className="thumb-img"
            />
        </div>
    );
};

export default ImageThumbnail;
