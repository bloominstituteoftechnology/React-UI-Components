import React from 'react';
import './Header.css';

function HeaderTitle(props) {
    return (
        <div>
            <h1 className='header-title'>{props.title}</h1>
        </div>
    );
}

export default HeaderTitle;
