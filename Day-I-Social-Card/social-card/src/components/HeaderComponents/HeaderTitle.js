import React from 'react';
import './Header.css';

const HeaderTitle = props => {
    return (
        <div className='title'>
            <h1>Lambda School</h1>
            <p className='greytext'>@Lambda School</p>
            <li className='greytext'><span>03 Nov</span></li>
        </div>
    );
}

export default HeaderTitle;
