import React from 'react';
import './Header.css';
import HeaderContent from "./HeaderContent.js";


const HeaderTitle = () => (
    <div className="header-right-side">
        <div className = "header-title">
            <h1>Lambda School</h1>
            <h1 className="handle">@LambdaSchool</h1>
        </div>
        <HeaderContent/>
    </div>
);

export default HeaderTitle;