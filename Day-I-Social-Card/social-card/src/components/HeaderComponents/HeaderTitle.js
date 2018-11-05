import React from 'react';
import './Header.css';

function HeaderTitle(props) {
    return (
        <React.Fragment>
            <h2 className="header-name">{props.name}</h2>
            <p className="header-username">{props.username}</p>
            <p>&#9679;</p>
            <p className="header-date">{props.date}</p>
        </React.Fragment>
    );
}

export default HeaderTitle;