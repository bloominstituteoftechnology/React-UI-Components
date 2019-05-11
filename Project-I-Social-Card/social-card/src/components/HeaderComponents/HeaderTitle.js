import React from 'react';
import './Header.css';

const HeaderTitle = (props) => {
    return (
        <div className="twitter-handle">
            <div className="twitter-account">{props.title}</div>
            <div className="gray-font">{props.twitter} • {props.date}</div>
        </div>
    )
}

export default HeaderTitle;