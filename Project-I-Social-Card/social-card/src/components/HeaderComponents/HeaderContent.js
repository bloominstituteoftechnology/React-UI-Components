import React from 'react';
import './Header.css';
import HeaderContainer from './HeaderContainer';

function HeaderContent(props) {
    return (
        <p>{props.text}</p>
    );
}


export default HeaderContent;