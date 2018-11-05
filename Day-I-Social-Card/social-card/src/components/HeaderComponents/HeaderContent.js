import React from 'react';
import './Header.css';

function HeaderContent(props) {
    return (
        <>
            <p className="header-content">{props.content}</p>
        </>
    );
}

export default HeaderContent;