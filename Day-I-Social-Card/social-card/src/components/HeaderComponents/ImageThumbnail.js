import React from 'react';
import './Header.css';

function ImageThumbnail(props) {
    return (
        <React.Fragment>
            <img src={props.source} alt="Lambda Symbol" />
        </React.Fragment>
    )
}

export default ImageThumbnail;