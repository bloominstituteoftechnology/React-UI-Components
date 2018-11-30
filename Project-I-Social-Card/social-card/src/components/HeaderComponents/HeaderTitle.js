import React from 'react';
import './Header.css';

let date = function() {
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    let now = new Date();
    return(now.getDate() + ' ' + months[now.getMonth()]);
};

const HeaderTitle = () => {
    return (
        <div className = 'header-title'>
            <h1>Lambda School</h1>
            <h3>@LambdaSchool</h3>
            <h3>{date()}</h3>
        </div>
    )
};

export default HeaderTitle;
