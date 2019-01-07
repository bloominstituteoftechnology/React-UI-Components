import React from 'react';
import './Header.css';
import Moment from 'moment';

let currentTime = Moment().format('D MMM');

const HeaderTitle = () => (
    <div className="HeaderTitle">
        <strong>Lambda School</strong><span>@LambdaSchool • {currentTime}</span>
    </div>
)

export default HeaderTitle;