import React from 'react';
import './Icon.css';
import lambdaImg from '../../img/lambda-badge.png';

const ImageThumbnail = () => {
    return (
        <div className="thumbnail">
            <img src={lambdaImg} alt="Lambda Badge" />
        </div>
    );
};

export default ImageThumbnail;
