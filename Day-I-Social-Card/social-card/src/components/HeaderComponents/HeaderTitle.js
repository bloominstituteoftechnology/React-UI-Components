import React from 'react';
import './Header.css';
var moment = require('moment');


const HeaderTitle = () => {
    return (
        <div className="header-title">
            <span className="header-text1">Lambda School</span>
            <span className="header-text2">@LambdaSchool</span>
            <span className="header-text3">· {moment().format("D MMM")}</span>
        </div>
    )
}

export default HeaderTitle;