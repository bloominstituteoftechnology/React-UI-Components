import React from 'react';
import './Header.css';

const HeaderTitle = props => {
    return (
        <div className="header-title-container">
            <h2 className="header-title">
                <a href={props.user.profile}>{props.user.name}</a>
            </h2>
            <a className="user-handle" href={props.user.profile}>
                {props.user.handle}
            </a>
            <p className="post-date">26 jan</p>
        </div>
    );
};

export default HeaderTitle;
