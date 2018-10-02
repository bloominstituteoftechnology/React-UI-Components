import React from 'react';
import './Header.css';

const HeaderTitle = props => (
    <div className="header-title">
        <a className="profile-name" href={props.profileUrl}>
            {props.profileName}
        </a>
        <span className="profile-id"> {props.profileId} </span>
        &middot;
        <span className="post-date"> {props.postDate}</span>
    </div>
);

export default HeaderTitle;