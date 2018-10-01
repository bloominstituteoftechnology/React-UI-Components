import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle'

const HeaderContainer = (props) => {
    return (
        <div className="header-container">
            <HeaderTitle />
        </div>
    );
}

export default HeaderContainer;
