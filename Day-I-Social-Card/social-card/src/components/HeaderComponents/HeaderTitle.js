import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';

const HeaderTitle = () => {
    return (
        <div className="header-wrapper">
            <div className="header-title">
                Lambda School
                <span className="time-stamp">Oct 1st</span>
                <HeaderContent />
            </div>
        </div>
    );
}

export default HeaderTitle;