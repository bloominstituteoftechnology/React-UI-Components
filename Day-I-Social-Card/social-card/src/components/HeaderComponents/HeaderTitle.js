import React from 'react';
import HeaderContent from "./HeaderContent";
import './Header.css';


const HeaderTitle = () => {
    return ( 
        <div className="header-title-container">
            <div className="header-title">
                Lambda School
                <span className="time-stamp"> 8am Lambda Time Zone</span>
                <HeaderContent />
        </div>
    </div>
    );
};

export default HeaderTitle;
