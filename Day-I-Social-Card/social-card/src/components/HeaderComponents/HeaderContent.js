import React from 'react';
import './Header.css';

const HeaderContent = (props) => {
    return (
        <p className = {props.className}>
            {props.text}
        </p>
    )
}

export default HeaderContent;