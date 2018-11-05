import React from 'react';
import './Header.css';

function ImageThumbnail(props) {
    return (
     <React.Fragment>
        <img src={props.src} />
      </React.Fragment>
    );
}

export default ImageThumbnail;
