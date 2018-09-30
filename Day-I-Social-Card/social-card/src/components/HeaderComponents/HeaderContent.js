import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle';


const HeaderContent = () => {
    let content = "Let's learn React by building simple interfaces with components. Don't try to overthink it, just keep it simple and have fun. Once you feel comfortable using components you are well on your way to mastering React!";

    return (
    <div className="header-content">
        <HeaderTitle />
        <p className="header-text">{content}</p>
    </div>
    );
};

export default HeaderContent;