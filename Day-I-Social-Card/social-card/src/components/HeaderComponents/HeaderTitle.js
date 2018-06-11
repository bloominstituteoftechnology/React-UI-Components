import React from 'react';
import './Header.css';

function HeaderTitle() {
    return (
        <div className = "header-title">
            <p>
                <span className="header-title-text">Lambda SChool</span>
                <a className='header-title-handle' href="https://twitter.com/lambdaschool">@lambdaschool</a>
                &middot;
                <span className="header-title-date">11 Jan</span> 
            </p>
        </div>
    )
}

export default HeaderTitle;