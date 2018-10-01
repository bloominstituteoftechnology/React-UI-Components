import React from 'react';
import './Header.css';
import LambdaImg from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';

function HeaderContainer(){
    return (
        <div className = 'header-container'>
            <LambdaImg />
            <div className = 'header-text-content'>
                <HeaderTitle />
                <HeaderContent />   
            </div>
        </div>
    );
};

export default HeaderContainer;