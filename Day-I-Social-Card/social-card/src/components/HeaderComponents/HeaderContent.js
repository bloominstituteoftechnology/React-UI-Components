import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle';

const HeaderText = () => <p className='header-text'>Let's learn React by building simple interfaces with components.  Don't try to overthink it, just keep it simple and have fun.  Once you are comfortable using components you are well on your way to mastering React!</p>;
const HeaderContent = () => (
    <div className='header-content'>
        <HeaderTitle />
        <HeaderText />
    </div>    
);

export default HeaderContent;