import React from 'react';
import './Header.css';

const HeaderTitle = prop => {
    return (
        <div className="title-container">
            <h1 className="header-title">Lambda School</h1>
            <p className="time-stamp">&#64;LambdaSchool  &#8226;  26 jan</p>
        </div>
    );
};

export default HeaderTitle;