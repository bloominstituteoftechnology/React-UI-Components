import React from 'react';
import './Header.css';

//Create an <ImageThumbnail /> component using this 
//image url https://ibin.co/3whrpKSBbZ81.png as it's img src.

function ImageThumbnail(){
    return (
        <React.Fragment>
            <img className="image" src="lambda-logo.png" alt="lambda logo"></img>
        </React.Fragment>
    );
}

export default ImageThumbnail;