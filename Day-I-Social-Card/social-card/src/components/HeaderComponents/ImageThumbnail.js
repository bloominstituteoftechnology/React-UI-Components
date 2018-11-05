import React, { Fragment } from 'react';
import './Header.css';

const ImageThumbnail = props => {
    console.log(props);
    return (
        <Fragment>
            <img src={props.user.avatarUrl} alt="" />
        </Fragment>
    );
};

export default ImageThumbnail;
