import React from 'react';
import './Header.css';

const HeaderTitle = () => {
    return (
        <div className='header-title'>
            <div className='text'>Lambda School</div>
            <div className='handle'>@LambdaSchool</div>
            <div className='bullet'>&bull;</div>
            <div className='timestamp'>27 aug</div>
        </div>
    );
};

export default HeaderTitle;