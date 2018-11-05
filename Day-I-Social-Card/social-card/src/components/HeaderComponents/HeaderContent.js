import React from 'react';
import './Header.css';

const HeaderContent = props => {
    return (
        <p className='header-content'>{props.text}</p>
    );
}

export default HeaderContent;
