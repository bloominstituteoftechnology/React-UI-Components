import React from 'react';
import './Header.css';

const HeaderHeadline = () => <h3 className='header-headline'>Lambda School</h3>;
const HeaderHandle = () => <p className='header-handle'>@LambdaSchool - 26jan</p>;
const HeaderTitle = () => (
    <div className='header-title'>
        <HeaderHeadline />
        <HeaderHandle />
    </div>
);

export default HeaderTitle;