import React from 'react';
import moment from 'moment';
import './Header.css';

const HeaderTitle = () => (
    <div class="header-title">
        <h3>Lambda School</h3>
        <div class="handle-date"><p>@LambdaSchool · {`${moment().format('Do dddd')}`}</p></div>
    </div>
);

export default HeaderTitle;