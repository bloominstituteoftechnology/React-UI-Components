import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';
import HeaderTitle from './HeaderTitle';

const HeaderRight = () => {
    return (
        <div>{<HeaderContent/>}<HeaderTitle/></div>
        
    )
};

export default HeaderRight;
