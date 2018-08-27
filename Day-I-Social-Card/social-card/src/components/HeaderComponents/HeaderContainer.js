import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';


const HeaderContainer = () => (
    <div class="headerDiv">
        <div>
        <HeaderTitle />
        <HeaderContent />
        </div>
        
    </div>
);

export default HeaderContainer;
