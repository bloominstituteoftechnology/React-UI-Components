import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';

const HeaderTitle = () => {
    return (
        <div className='header-title-wrapper'>
            <div className='header-title' >
                <strong>Lambda School</strong>
                <span className='date'>@LambdaSchool &bull; 26 jan</span>
                <HeaderContent />
            </div>
        </div>
    );
};

export default HeaderTitle;