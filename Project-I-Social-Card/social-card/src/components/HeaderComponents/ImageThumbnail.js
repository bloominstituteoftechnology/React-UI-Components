import React from 'react';
import './Header.scss';

const ImageThumbnail = props => {
    return (
        <div className = "headerImage">
            <img className = 'lambda-thumbnail' src="https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png" />
        </div>
    );
}

export default ImageThumbnail;