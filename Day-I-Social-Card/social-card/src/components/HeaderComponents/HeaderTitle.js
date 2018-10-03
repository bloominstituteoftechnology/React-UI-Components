import React from 'react';
import './Header.css';
import moment from 'moment';

const HeaderTitle = () => {
    return (
        <div className = "header-title">
            <h3 className = "lambda-school-bold">Lambda School</h3> <p className = "grey-text">@LambdaSchool • {moment().format('MMMM Do YYYY, h:mm a')}</p>
        </div>
    );
}

export default HeaderTitle;