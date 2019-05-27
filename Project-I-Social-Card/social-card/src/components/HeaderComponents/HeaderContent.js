import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle';

function HeaderContent ({ text }) {
    return (
        <div>
            <HeaderTitle />
            <p>{text}</p>
        </div>
    )
}

export default HeaderContent;
