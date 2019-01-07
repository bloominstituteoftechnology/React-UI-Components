import React from 'react';
import moment from 'moment';
import './Header.css';


function HeaderTitle (){
    return (
        <div className='HeaderTitle'>
            <div className='name'>Lambda School</div>
            <div className='handle'>@LambdaSchool</div>
            <div className='date'> {moment().format("Do YYYY")}</div>
        </div>
    ) 
}

export default HeaderTitle