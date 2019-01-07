import React from 'react';
import './Header.css';

const HeaderTitle = () => {
    return (
        <div className='header-content'>
            <span className='header-user'>Lambda School</span>
            <span className='header-social'>@LambdaSchool</span>
            <span className="header-date">26 Jan</span>
        </div>
    );
}

export default HeaderTitle;