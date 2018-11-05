import React from 'react';
import './Header.css';

function HeaderTitle(props) {
    return (
        <div className="header-title">
            <h1 className="lambdaTitle">Lambda School</h1>
            <p className="twitterHandle">@LambdaSchool</p>
            <p className="timestamp">26 jan</p>
        </div>
    )
}

export default HeaderTitle;