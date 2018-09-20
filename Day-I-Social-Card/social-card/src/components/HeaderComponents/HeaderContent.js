import React from 'react';
import './Header.css';

const HeaderContent = (props) => {
    return (
        <div className="headerText">{props.text}</div>
    );
};

export default HeaderContent;