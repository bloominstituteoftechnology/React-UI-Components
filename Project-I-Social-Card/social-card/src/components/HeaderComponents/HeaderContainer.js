import React from 'react';
import './Header.scss';

const HeaderContainer = props => {
    return (
    <div className = 'header-container'>{props.children}</div>
    );
}

export default HeaderContainer;