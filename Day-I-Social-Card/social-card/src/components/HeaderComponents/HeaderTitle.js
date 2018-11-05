import React from 'react';
import './Header.css';

function HeaderTitle(props) {
    return (
        <>
            <h2 className="header-name">{props.name}</h2>
            <p className="header-username">{props.username}</p>
            <p>&$9679;</p>
            <p className="header-date">{props.date}</p>
        </>
    );
}

export default HeaderTitle;