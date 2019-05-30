import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';

function HeaderTitle() {
    return (
        <div className="header-title-wrapper">
            Lambda School
            <HeaderContent />
        </div>
    );
}

export default HeaderTitle;
