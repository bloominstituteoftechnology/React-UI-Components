import React from 'react';
import './Header.css';
import moment from 'moment';

const HeaderTitle = () => {
    return(
    <div className = "main-header">
    <h3>Lambda School</h3> @LambdaSchool &nbsp; &middot; {moment().format('D MMM')}
    </div>
    )
}

export default HeaderTitle;
