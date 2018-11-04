import React from 'react';
import moment from 'moment';
import './Header.css';

const today = moment().format('DD MMM');

const HeaderTitle = props => {
    return (
        <div className='title'>
            <h1>Lambda School</h1>
            <p className='greytext'>@Lambda School</p>
            <li className='greytext'><span>{today}</span></li>
        </div>
    );
}

export default HeaderTitle;
