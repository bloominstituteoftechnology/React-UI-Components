import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderContent from './HeaderContent';

const HeaderContainer = props => (
    <div className="header-container">
        <ImageThumbnail />
        <HeaderContent
            postDate={props.postDate}
            profileUrl={props.profileUrl}
            profileName={props.profileName}
            profileId={props.profileId}
        >
            {props.children}
        </HeaderContent>
    </div>
);

export default HeaderContainer;