import React from 'react';
import './Header.css';
import moment from 'moment';
const time = moment();

const HeaderTitle = () => {
    return (
        <p><strong>Lambda School</strong> <span class="grey">@LambdaSchool • <span className="time-stamp">{time.format('MMM Do ')}</span></span></p>



    )
    
}


export default HeaderTitle;