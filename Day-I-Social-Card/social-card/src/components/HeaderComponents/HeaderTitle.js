import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';

const HeaderTitle = () => {
    const moment = require('moment');
    return (
        <div className= "headerTitle">
            <h4>Lambda School   <span>@LambdaSchool &middot; {moment().format('D MMM').toLocaleLowerCase()}</span></h4>
            <HeaderContent />
        </div>
        
    );
}

export default HeaderTitle; 