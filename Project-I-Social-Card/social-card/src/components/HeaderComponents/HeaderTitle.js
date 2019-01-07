import React from 'react';
import './Header.css';

const HeaderTitle = () => {
    return (
        <div className='header-content'>
            <p className='header-user'>Lambda School 
                <span className='header-social'>@LambdaSchool</span>
                <span className="header-date">26 Jan</span>
            </p>
            
        </div>
    );
}

export default HeaderTitle;