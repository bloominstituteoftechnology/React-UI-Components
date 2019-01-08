import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';

const HeaderTitle = () => {
    return (
        <div className="header-title-container">
            <div className="header-title" >
                Lambda School
                {/* <span className="time-stamp">{time.format('MMM Do ')}</span> */}
                <HeaderContent/>
            </div>
        </div>
    )
}

export default HeaderTitle;