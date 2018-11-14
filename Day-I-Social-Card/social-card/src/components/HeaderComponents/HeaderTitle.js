import React from 'react';
import './Header.css';
import HeaderContent from "./HeaderContent";
import moment from 'moment';
const time = moment();

const HeaderTitle = () => {
    return (
        <div className='header-title'>
            <div className='header-info'>
                Lambda School                
                <span className='time-stamp'>
                @LambdaSchool 
                {time.format('D MMM')}
                </span>
                <HeaderContent />
            </div>
        </div>
    );
}

export default HeaderTitle;

