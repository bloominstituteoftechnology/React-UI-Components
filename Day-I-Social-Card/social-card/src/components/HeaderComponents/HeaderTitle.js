import React from 'react';
import './Header.css';

const HeaderTitle = (props) => {
    return (
        <div className="author">
            <div className="name">{props.name} </div>
            <div className="handle"> @{props.handle} </div>
            <div className="date">• {props.date}</div>
        </div>
    );
}
export default HeaderTitle;