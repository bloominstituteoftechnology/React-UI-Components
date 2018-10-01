import React from 'react';
import './Header.css';

const HeaderTitle = props => {
    return (
        <div className='title-container'>
            <div className='acct-name'>Lambda School</div>
            <div className='acct-handle'>@LambdaSchool</div>
            <div className='timestamp'>· 1 oct</div>
        </div>
    );
};

export default HeaderTitle;