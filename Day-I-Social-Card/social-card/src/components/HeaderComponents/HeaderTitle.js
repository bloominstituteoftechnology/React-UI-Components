import React from 'react';
import './Header.css';

function HeaderTitle(props) {
    return (
        <div className="header-title">
            <h2 className="header-name">{props.name}</h2>
            <p className="header-username">{props.username}</p>
            <p>·</p>
            <p className="header-date">{props.date}</p>
        </div>
    );
}

export default HeaderTitle;