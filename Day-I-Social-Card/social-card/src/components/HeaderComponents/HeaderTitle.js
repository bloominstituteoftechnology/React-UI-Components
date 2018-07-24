import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';



const HeaderTitle = () => {
    return (
        <div className="header-title-wrapper">
            <div className="header-title">
                <h4 className="Bolded-title title-element">Lambda School</h4>
                <p className="email-handle title-element">@LambdaSchool</p>
                <p className="time-stamp title-element">26 jan</p>
            </div>
            <HeaderContent />
        </div>
    );
};

export default HeaderTitle;