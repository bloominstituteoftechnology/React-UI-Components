import React from 'react';
import moment from 'moment';
import './Header.scss';


function HeaderTitle (){
    return (
        <div className='HeaderTitle'>
            <div className='name'>Lambda School</div>
            <div className='handle'>@LambdaSchool</div>
            <div className='date'>&#183; {moment().format("Do MMM ")}</div>
        </div>
    ) 
}

export default HeaderTitle 