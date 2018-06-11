import React from 'react';
import './Header.css';
const moment = require('moment');
const HeaderTitle = () => {
    return (
        <div className="header-title-container">
            <h2 className='lambda-title'>Lambda School</h2>
            <p className='lambda-handle'>@LambdaSchool</p>
            <p className='timestamp'>{moment().format('DD MMM').toLowerCase()}</p>
        </div>
    );
}

export default HeaderTitle;