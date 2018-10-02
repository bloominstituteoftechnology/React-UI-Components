import React from 'react';
import './Header.css';
import  HeaderTitle from './HeaderTitle.js';

const HeaderContent = props => (
    <div className="header-content">
        <HeaderTitle
            postDate={props.postDate}
            profileUrl={props.profileUrl}
            profileName={props.profileName}
            profileId={props.profileId}
        />
        <p>{props.children}</p>
    </div>
);

export default HeaderContent;