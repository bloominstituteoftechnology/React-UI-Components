import React from 'react';
import './Header.css';

const HeaderTitle = props =>{

    return(
        <div className='headerTitle'>
            <p className='header-title'>Lambda School</p>
            <p className='header-title header-post-title'>@lambdaSchool - 26 jan</p>
        </div>
    )
}

export default HeaderTitle;