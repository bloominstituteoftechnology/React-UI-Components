import React from 'react';
import './Header.css';

let moment = require('moment');

const HeaderTitle = () => {
    return (<div className="headerTitle">Lambda School <span>@LambdaSchool &bull; {moment().format('MMM Do')}</span></div>);
}

export default HeaderTitle;