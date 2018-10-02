import React from 'react';
import './Header.css';
import HeaderContent from "./HeaderContent";

const HeaderTitle = () => {
    return (
        <div className='header-title'>
            <h1>Lambda School</h1>
            <p className='grey-text'>@LambdaSchool</p>
            <p className='grey-text'>-26 Jan</p>
            <HeaderContent />
        </div>
    );
};

export default HeaderTitle;