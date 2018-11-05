import React from 'react';
import './Header.css';

function ImageThumbnail(props) {
    return (
        <React.Fragment> 
            <img className="header-img" src={props.src} alt={props.alt} />
        </React.Fragment>
    );
}

export default ImageThumbnail;
