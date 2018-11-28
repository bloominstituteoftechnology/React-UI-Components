import React from 'react';
import './Header.css';
import HeaderTitle  from '../HeaderComponents/HeaderTitle';
import HeaderContent from "../HeaderComponents/HeaderContent";

const HeaderContentContainer = ()=>{
    return (
        <div className="header-content-container">
            <HeaderTitle />
            <HeaderContent />
        </div>
    )
}

export default HeaderContentContainer;