import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';

const HeaderContainer = () => {
    return (
        <div className="top-container">
            <HeaderTitle />
            <HeaderContent />
        </div>
    );
};

export default HeaderContainer;
