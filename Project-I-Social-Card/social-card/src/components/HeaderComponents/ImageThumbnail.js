import React from 'react';
import './Header.css';

export const ImageThumbnail = (props) => {
    console.log(props, "image");
    return (
        <img className="thumbnail card-content" src={props.lambdaLogo} alt={props.altText} />
    )
}