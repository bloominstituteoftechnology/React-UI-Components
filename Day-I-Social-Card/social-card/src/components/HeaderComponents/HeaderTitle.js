import React from 'react';
import moment from 'moment';
import './Header.css';

const today = moment().format('DD MMM');

const HeaderTitle = props => {
    return (
        <div className='title'>
            <h1>{props.name}</h1>
            <p className='greytext'>@{props.name}</p>
            <li className='greytext'><span>{today}</span></li>
        </div>
    );
}

export default HeaderTitle;
