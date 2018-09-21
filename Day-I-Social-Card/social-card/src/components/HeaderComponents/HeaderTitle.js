import React from 'react';
import './Header.css';

const HeaderTitle = props => (
    <div className="header-title">
        <strong className="header-title-username">{props.user}</strong>
        <span className="header-title-handle">@{props.handle}</span>
        <span className="header-title-timestamp">{props.timestamp}</span>"
    </div>
);

export default HeaderTitle;