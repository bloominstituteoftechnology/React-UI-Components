import React from 'react';
import './Header.css';

const HeaderTitle = props => {
    return (
        <div className="header-title">
            <p className="twitter-name">Lambda School</p>
            <p className="twitter-handle">@LambdaSchool • 26 jan</p>
        </div>
    );
}

export default HeaderTitle;