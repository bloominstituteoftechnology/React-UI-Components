import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';

let todaysDate = () => {
    let monthNames = new Array('jan', 'feb', 'mar', 'apr', 'may','jun','jul','aug','sep','oct','nov','dec');

    let now = new Date();

     return ( now.getDate() + '  ' + monthNames[now.getMonth()])
};

const HeaderTitle = () => (
    <div className='header-title'>
        <div className='title'>
            <h1>Lambda School</h1>
            <h2 className = 'htwos'>@LambdaSchool</h2>
            <h2 className = 'htwos'> {todaysDate()} </h2>
        </div>
        <HeaderContent />
    </div>
);

export default HeaderTitle;
