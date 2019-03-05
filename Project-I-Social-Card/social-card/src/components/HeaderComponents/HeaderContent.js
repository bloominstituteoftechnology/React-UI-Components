import React from 'react';
import './Header.css';

const HeaderContent = props => (
    <div className='content-container'>
        <p>{props.content.text}</p>
    </div>
);

export default HeaderContent