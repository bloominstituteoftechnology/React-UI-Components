import React from 'react';
import './Header.css';
const ImageThumbnail = (props) => {
    console.log(props)
    return (
        <div className="imageContainer" >
            <img className="thumb" src="https://ibin.co/3whrpKSBbZ81.png" />
        </div>
    )
}

export default ImageThumbnail