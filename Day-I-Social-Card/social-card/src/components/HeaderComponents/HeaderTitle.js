import React from 'react';
import './Header.css';
import './HeaderContent';
import HeaderContent from './HeaderContent';

const HeaderTitle = () => {
    return (
        <div className="headerTitle">
            <h1>Lambda School</h1>
            <h2>@LambdaSchool</h2>
            <h2>• 26 Jan</h2>
            <HeaderContent />
        </div>
    );
}

export default HeaderTitle;