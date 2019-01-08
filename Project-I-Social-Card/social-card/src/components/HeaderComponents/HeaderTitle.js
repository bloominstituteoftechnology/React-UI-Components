import React from 'react';
import './Header.css';

const HeaderTitle = () => {
    return (
        <div className="owner-data">
        <span className="account-name">Lambda School</span>
        <span className="account-handle">@LambdaSchool</span>
        <span className="date">• 26 Jan</span>
        </div>
    );
}

export default HeaderTitle;