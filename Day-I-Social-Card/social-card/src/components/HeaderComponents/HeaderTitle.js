import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';

const getCurrentDate = () => {
    const date = new Date();
    return date.toDateString();
}

const HeaderTitle = () => {
    return (
        <div className="header-wrapper">
            <div className="header-title">
                Lambda School
                <span className="time-stamp">@LambdaSchool &middot; {getCurrentDate()}</span>
                <HeaderContent />
            </div>
        </div>
    );
}

export default HeaderTitle;