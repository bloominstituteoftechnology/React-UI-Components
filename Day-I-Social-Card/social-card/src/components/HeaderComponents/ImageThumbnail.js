import React from 'react';
import './Header.css';
import thumb from "/Users/erikkimsey/Desktop/lambda/React-UI-Components/Day-I-Social-Card/social-card/src/assets/lambda-thumbnail.png";
const ImageThumbnail = (props) => {
    return (
        <div className="thumbnail">
             <img src = {thumb} />
        </div>
       
    );
};

export default ImageThumbnail;