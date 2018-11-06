import React from 'react';
import './Header.css';

function ImageThumbnail(props) {
    return (
        <React.Fragment>
            <div class="thumbnail-wrapper">
                <img className="thumbnail" src="https://ibin.co/3whrpKSBbZ81.png" />
            </div>
        </React.Fragment>
    )
}

export default ImageThumbnail;