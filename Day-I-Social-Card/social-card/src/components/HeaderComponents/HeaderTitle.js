import React from 'react';
import './Header.css';

function HeaderTitle(){
    // const timeSig = new Date.UTC();

    return (
        <div className='header-title'>
            <h1>Lambda School</h1>
            <p>@LambdaSchool · 26 jan</p>
        </div>        
    );
}

export default HeaderTitle;