import React from 'react';
import './Header.css';

const HeaderTitle = props => {
    return (
        <div className="header-title">
            <h4>{props.title}</h4>
            <p>{props.handle}</p>
            <p>•</p>
            <p>{props.date}</p>
        </div>
    )
}

export default HeaderTitle