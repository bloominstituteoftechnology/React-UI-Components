import React from 'react';
import './Header.css';

var moment = require('moment');

const HeaderTitle = () => {
    return (
    <div className = "header-title">
        <h3>Lambda School</h3>
        <h4 className="grayed">@LambdaSchool • {moment().format('D MMM YYYY')}</h4>
    </div>
    );
}

export default HeaderTitle;