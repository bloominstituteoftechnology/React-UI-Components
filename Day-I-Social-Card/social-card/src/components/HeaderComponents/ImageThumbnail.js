import React from 'react';
import './Header.sass';

const ImageThumbnail = props => {
    console.log(props);
    return (
        <div className="image-thumbnail">
            <img className="image-thumbnail" src={props.user.avatarUrl} alt="" />
        </div>
    );
};

export default ImageThumbnail;
