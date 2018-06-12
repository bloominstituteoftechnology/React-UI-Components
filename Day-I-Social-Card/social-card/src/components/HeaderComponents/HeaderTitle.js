import React from 'react';
import './Header.css';
import moment from 'moment';

const HeaderTitle = () => {
    return (
        <div className="header-title">
            <h3>Lambda School</h3>
            <p className="sub-head">@LambdaSchool &middot; {moment().format('D MMM')}</p>
        </div>
    )
    };
    
    export default HeaderTitle;