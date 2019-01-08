import React from 'react';
import './Header.css';

const moment=require('moment');
let todayDate = "@Lambda School · " + moment().format('LL');

export const HeaderTitle = () => 
    
        <div className="header-title">
            <h1>Lambda School</h1>
            <h2>{todayDate}</h2>
        </div>;



