import React from 'react';
import './Header.css';
<script src="moment.js"></script>

const HeaderTitle= () => {
    let moment = require('moment');
    return ( 
    <div className="header-wrapper">
    <b>Lambda School</b> <small><em>@LambdaSchool - {moment().format('LL')}</em></small>
    </div>
);
};

export default HeaderTitle;