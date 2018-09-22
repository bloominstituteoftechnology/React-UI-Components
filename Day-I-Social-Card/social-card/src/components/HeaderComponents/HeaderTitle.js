import React from 'react';
import './Header.css';
import moment from 'moment';

const HeaderTitle = () => {
    return (
        <div className ='header-info'>
            <h1>Lambda School</h1>
            <p className='atlambda'>@LambdaSchool</p>
            <p>&nbsp;&#8226; {moment().format("Do MMM")}</p>
        </div>
    );
}

export default HeaderTitle;




