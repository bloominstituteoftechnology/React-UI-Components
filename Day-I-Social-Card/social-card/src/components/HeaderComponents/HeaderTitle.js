import React from 'react';
import './Header.css';

function HeaderTitle() {
    return (
        <div className = "header-title">
            <p>
                <span className="header-title-text">Lambda School</span>
                <a className='header-title-handle' href="https://twitter.com/lambdaschool">@LambdaSchool</a>
                &middot;
                <span className="header-title-date">26 jan</span> 
            </p>
        </div>
    )
}

export default HeaderTitle;