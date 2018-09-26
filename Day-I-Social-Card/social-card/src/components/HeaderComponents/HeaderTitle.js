import React from 'react';
import './Header.css';

const HeaderTitle = () => {
    return (
        <div className="header-title-wrapper">
            <div className="header-name">Lambda School</div>
            <div className="header-handle">@LambdaSchool</div>
            <div className="header-date">26 Sept</div> 
        </div>
    );
};

export default HeaderTitle;