import React from 'react';
import './Header.css';
// import HeaderContainer from './HeaderContainer';

function HeaderContent(props) {
    return (
        <p className="header-content">{props.text}</p>
    );
}


export default HeaderContent;