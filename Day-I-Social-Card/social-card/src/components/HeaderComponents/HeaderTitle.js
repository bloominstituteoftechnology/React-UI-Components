import moment from "moment";
import React from 'react';
import './Header.css';

const HeaderTitle = props => {
    return (
        <div className="header-title">
            <p className="twitter-name">Lambda School</p>
            <p className="twitter-handle">@LambdaSchool • {moment().format("MMM Do YY")}</p>
        </div>
    );
}

export default HeaderTitle;