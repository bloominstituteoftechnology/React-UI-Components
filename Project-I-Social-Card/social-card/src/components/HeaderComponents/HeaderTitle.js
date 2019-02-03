import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';

const HeaderTitle = () => {
    return(
        <div className='header-content'>
            <div className='header-title'>
                <h2>Twitter</h2>
                <p>@Twitter</p>
                <p>•</p>
                <p>26 jan</p>
            </div>
            <HeaderContent />
        </div>

    );
}
export default HeaderTitle;