import React from 'react';
import './Header.css';
import moment from 'moment';

const HeaderTitle = props => { 
    return (
        <div className = 'headerTitle'>
            <h2>Lambda School</h2>
            <h3>@LambdaSchool -  {moment().format("MMM Do YY")}</h3>
        </div>
    );
}

export default HeaderTitle;