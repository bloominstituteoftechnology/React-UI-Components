import React from 'react';
import './Header.css';
const thumbNail = '../../../../design-files/social-card.png';

const ImageThumbnail = (props) => {
    return (
        <div>
             <img src = {thumbNail} alt = "lambda-thumbnail" />
        </div>
       
    );
};

export default ImageThumbnail;