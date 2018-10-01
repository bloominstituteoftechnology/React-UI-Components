import React from 'react';
import './Header.css';

const HeaderTitle = props => {
    return (
        <div className="header-title">
            <h1 className="name">Lambda School</h1>
            <p className="username-date">@LambdaSchool • 26 jan</p>
        </div>
    )
}

export default HeaderTitle;