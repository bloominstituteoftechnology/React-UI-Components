import React from 'react';
import './Header.css';
import Moment from 'moment';

function HeaderTitle() {
    const dateStamp = Moment().format('Do MMM')
    return (
        <div classname="title">
            <h4 className="hdText">Lambda School</h4>
            <p className="handle">@LambdaSchool</p>
            <p className="date">{dateStamp}</p>
        </div>
    )
}

export default HeaderTitle