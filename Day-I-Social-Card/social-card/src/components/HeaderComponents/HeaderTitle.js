import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';
import moment from 'moment';
const time = moment();



const HeaderTitle = () => {
    return (
        <div className="header-title-wrapper">
            <div className="header-title">
                <h4 className="Bolded-title title-element">Lambda School</h4>
                <p className="email-handle title-element">@LambdaSchool</p>
                <p className="time-stamp title-element">{time.format("D MMM")}</p>
            </div>
            <HeaderContent />
        </div>
    );
};

export default HeaderTitle;