import React from 'react';
import './Header.css';

const HeaderTitle = props => {
    return (
        <div className="header-title-container">
            <div className="header-username"> Lambda School </div>
            <div className="header-usertag"> @LambdaSchool </div>
            <div className="header-bullet"> &bull; </div>
            <div className="header-creation-date"> 29 jan</div>
        </div>
    );
};

export default HeaderTitle;