import React from 'react';
import './Header.css';

const HeaderTitle = props => {
    return (
        <div className="header-title-container">
            <p className="header-text">
                Lambda School
            </p>
            <p className="header-handle">
                @LambdaSchool
            </p>
            <p className="header-timestamp">
                &middot; May 29
            </p>
        </div>
    )
}

export default HeaderTitle;
