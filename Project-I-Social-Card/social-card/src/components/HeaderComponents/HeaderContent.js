import React from 'react';
import './Header.css';

const HeaderContent = (props) => {
    return <p className="post-header-content">{props.content}</p>;
};

export default HeaderContent;
