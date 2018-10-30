import React from 'react';

import './Header.css';

import HeaderTitle from './HeaderTitle.js';

const HeaderContent = () => {
    return (
        <div class="header-content-container">
            <HeaderTitle />
        <p class='react-info'>Let's learn React by building simple interfaces with components.
                Dont' try to overthink it, just keep it simple and have fun. Once you feel comfortable
            using components you are well on your way to mastering React!</p>
        </div>
    );
};

export default HeaderContent;