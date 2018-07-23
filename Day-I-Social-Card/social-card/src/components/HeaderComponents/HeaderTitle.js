import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';

const HeaderTitle = () => {
    return (
        <div className="header-title-wrapper">
            <div className="header-title">
                Lambda School
                {/* <span className="time-stamp">23 july</span> */}
                <HeaderContent />
            </div>
        </div>
    );
}

export default HeaderTitle;