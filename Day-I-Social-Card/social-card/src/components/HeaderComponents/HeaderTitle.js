import React from 'react';
import './Header.css';
import moment from 'moment';

const HeaderTitle = () => {
    return (
    <div className="header-title">
    <p className="header-title-lambda"> Lambda School </p>
    <p className="header-title-lambda"> @LambdaSchool &nbsp; &middot;</p>
    
   <p className="header-title-lambda">
   {moment().format('D MMM')}
   </p>
    </div>
    );
    };
    
    export default HeaderTitle;