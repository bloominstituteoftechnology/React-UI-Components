import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';

const HeaderTitle = () => {
    return (
        <div className="header-title-container">
            <div className="header-title">
                Lambda School
                <span className="user-date">@LambdaSchool 26 Jan</span>
            </div>
            <HeaderContent />
        </div>
    );
};

export default HeaderTitle;