import React from 'react';
import './Header.css';

function HeaderTitle({ text, handle, timestamp }) {
    return (
        <div className = 'header-details'>
            <h2>{text}</h2>
            <p>{handle}</p>
            <p>{timestamp}</p>
        </div>
    )
}

export default HeaderTitle;