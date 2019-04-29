import React from 'react';
import './Header.css';

const HeaderTitle = () => {
    return (
        <div className="header-title-container">
        <h2 className="header-title">Lambda School</h2>
        <p className="header-link">@LambdaSchool</p>
        <p className="header-time">Jan 26</p>
        </div>
    );
};

export default HeaderTitle;