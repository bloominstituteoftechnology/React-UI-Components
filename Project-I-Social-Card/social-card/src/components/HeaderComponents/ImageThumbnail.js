import React from 'react';
import './Header.css';

// Create an <ImageThumbnail /> component using this image url 
// https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png as it's img src.

function ImageThumbnail(){
    return (
        <div className="logoImage">
            <img className="image" src="https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png" alt="lambda logo"/>
        </div>
    );
}

export default ImageThumbnail;
