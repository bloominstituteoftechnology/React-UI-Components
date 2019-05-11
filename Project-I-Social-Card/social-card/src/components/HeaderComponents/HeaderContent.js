import React from 'react';
import './Header.css';


const HeaderContent = props => {
    return (
        <div className="header-content">{props.content}</div>
    )
}

export default HeaderContent;