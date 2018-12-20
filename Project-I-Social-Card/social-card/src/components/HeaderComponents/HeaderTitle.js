import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent.js';

const HeaderTitle = props => {
    return (
        <div className="header-content">
            <h2>Lambda School</h2>
            <h3>@LambdaSchool</h3>
            <h3>&middot;</h3>
            <h3>20 dec</h3>
            <HeaderContent />
        </div>
    );
};

export default HeaderTitle;