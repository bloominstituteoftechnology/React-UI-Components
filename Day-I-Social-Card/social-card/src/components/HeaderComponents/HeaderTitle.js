import React from 'react';
import './Header.css';

const HeaderTitle = prop => (
    <div className='titleBox'>
        <div className='titleUserName'>Lambda School</div>
        <div className='titleHandle'> @LambdaSchool </div>
        <div className='titleDate'>* 26 jan </div>
    </div>
);

export default HeaderTitle;