import React from 'react';
import './Header.css';

function HeaderTitle(props) {
    return (
        <div className="header-title">
            <h2 className="headerText">{props.title}</h2>
            <p className="gray-text">{props.handle}</p>
            <p className="gray-text">{props.date}</p>
        </div>
    );
}

export default HeaderTitle;
