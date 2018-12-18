import React from 'react';
import './Header.css';

function HeaderTitle(props) {
    return (
        <React.Fragment>
            <h2 className="header-title">{props.title}</h2>
            <p className="handle">{props.handle}</p>
            <p className="date">{props.date}</p>
        </React.Fragment>
    );
}