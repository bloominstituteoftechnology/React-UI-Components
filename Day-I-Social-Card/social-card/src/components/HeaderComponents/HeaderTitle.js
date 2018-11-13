import React from 'react';
import './Header.css';
import HeaderContent from "./HeaderContent";
import moment from 'moment';
const time = moment();

const HeaderTitle = () => {
    return (
        <React.Fragment>
            <div className='header-title'>
                Lambda School                
                <span className='time-stamp'>
                @LambdaSchool 
                {time.format('D MMM')}
                </span>
                <HeaderContent />
            </div>
        </React.Fragment>
    );
}

export default HeaderTitle;

