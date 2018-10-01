import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle.js';

const HeaderContainer = props => {
    return(
        <div className="header-container">
            <HeaderTitle
                className="header-title"
                postDate={props.postDate}
                profileUrl={props.profileUrl}
                profileName={props.profileName}
                profileId={props.profileId}
            />
        </div>
    );
};

export default HeaderContainer;