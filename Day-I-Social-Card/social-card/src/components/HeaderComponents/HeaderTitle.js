import React from 'react';
import './Header.css';

function HeaderTitle(props) {
    return (
        <div className='header-bar'>
            <p className='header-title'>{props.title}</p>
            <p className='username'>{props.userName}</p>
            <p className='date-symbol'>.</p>    
            <p className='header-date'>{props.date}</p>  
        </div>
    )
}

export default HeaderTitle;