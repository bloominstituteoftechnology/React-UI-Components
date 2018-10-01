import React from 'react';
import './Header.css';

const HeaderTitle = props => {
    return (
        <div className='header-title'>
            <h2>{props.name}</h2>
            <h3>@{props.username} . {props.timestamp}</h3>
        </div>
    );
}

export default HeaderTitle;