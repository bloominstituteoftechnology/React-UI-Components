import React from 'react';
import './Header.css';

const HeaderLg = () => <h1 className="header-title">Lambda School</h1>;
const HeaderHandle = () => <p className="header-handle">@LambdaSchool - 26jan</p>;
const HeaderContent = () => <p className="header-content">Let's learn React by building simple interfaces with components. Don't try to overthink it, just keep it simple and have fun. 
    Once you feel comfortable using components you are well on your way to mastering React!</p>;

const HeaderTitle = () => {
    return(
        <div className="header-title-main">
            <HeaderLg />
            <HeaderHandle />
            <HeaderContent />
        </div>
    );
};

export default HeaderTitle;