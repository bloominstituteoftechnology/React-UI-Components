import React from 'react';
import './Header.css';
import thumb from "/Users/erikkimsey/Desktop/lambda/React-UI-Components/Day-I-Social-Card/social-card/src/assets/lambda-thumbnail.png";
const ImageThumbnail = (props) => {
    return (
        <div>
             <img src = {thumb}  className="thumbnail"/>
        </div>
       
    );
};

export default ImageThumbnail;