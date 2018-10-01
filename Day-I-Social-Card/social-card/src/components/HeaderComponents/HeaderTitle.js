import React from 'react';
import './Header.css';

function HeaderTitle(props) {
    return (
        <div>
            <a className="profile-name" href={props.profileUrl}>
                {props.profileName}
            </a>
            <span className="profile-id"> {props.profileId} </span>
            &middot;
            <span className="post-date"> {props.postDate}</span>
        </div>
    );
}

export default HeaderTitle;