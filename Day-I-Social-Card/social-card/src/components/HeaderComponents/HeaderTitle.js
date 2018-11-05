import React from 'react';
import './Header.css';

function HeaderTitle(props) {
    return (
        <div className='header-bar'>
            <p class='header-title'>{props.title}</p>
            <p class='username'>{props.userName}</p>
            <p class='date-symbol'>.</p>    
            <p class='header-date'>{props.date}</p>  
        </div>
    )
}

export default HeaderTitle;