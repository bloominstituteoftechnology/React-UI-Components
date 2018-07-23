import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle';

const HeaderContent = () => {
    return (
        <div className="header-content">
            <HeaderTitle />
            <div className="ls-twit">@LambdaSchool</div>
            <div className="date">Jan 12</div>
        </div>
    );
};

export default HeaderContent;