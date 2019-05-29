import React from 'react';
import './Header.css';

const HeaderTitle = () => {
    return (
        <div className='header-title'>
            <h2>Lambda School</h2>
            <p className='lambda-handle'>@LambdaSchool</p>
            <p className='time-stamp'>26 jan</p>            
        </div>
    )
}

export default HeaderTitle;