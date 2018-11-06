import React from 'react';
import './Header.css';

function HeaderContent(props) {
    return (
    <div className='header-text'>
        <p>{props.text}</p>
    </div>
    )
}

export default HeaderContent;