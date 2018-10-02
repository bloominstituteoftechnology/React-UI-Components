import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle.js';
import HeaderContent from './HeaderContent.js';

const HeaderContentContainer = () => {
    return (
        <div className="headerContentContainer">
        <HeaderTitle />
        <HeaderContent />
        </div>
    )
}

export default HeaderContentContainer;