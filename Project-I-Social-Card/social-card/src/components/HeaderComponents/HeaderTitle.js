import React from 'react';
import './Header.css';

const moment = require('moment');

const HeaderTitle = () => {
    return (
        <div className='header-title'>
            <p className='header-user'>Lambda School 
                <span className='header-social'>@LambdaSchool</span>
                <span className="header-date">• {moment().format("D MMM")}</span>
                
            </p>
            
        </div>
    );
}

export default HeaderTitle;