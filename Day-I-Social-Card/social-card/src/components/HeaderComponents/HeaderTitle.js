import React from 'react';
import moment from 'moment';
import './Header.css';

let m = moment().format("D MMM");

const HeaderTitle = () => {
    return (
        <div className="header-title">
            <h1>
                Lambda School <span className="gray-note">@LambdaSchool · {m} </span>
            </h1>
        </div>
    
    );
};

export default HeaderTitle;
