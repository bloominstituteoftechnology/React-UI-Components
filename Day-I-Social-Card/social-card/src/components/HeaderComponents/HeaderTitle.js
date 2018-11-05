import React from 'react';
import moment from 'moment';
import './Header.css';

const HeaderTitle = () => {
    return (
        <div>
            <span className="headerTitle">Lambda School</span>
            <span className="headerInfo"> @LambdaSchool · {moment().format('MMM DD')}</span>
        </div>
    );
};

export default HeaderTitle;