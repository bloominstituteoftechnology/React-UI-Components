import React from 'react';
import './Header.css';

const HeaderTitle = props => (
    <div className="header-title-div">
        <strong className="header-title">{props.title}</strong>
        <span className="header-handle">@{props.handle}</span>
        <span className="header-timestamp">{props.timestamp}</span>"
    </div>
);

export default HeaderTitle;