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
            <h1 className = "title header-title-style">Lambda School</h1>
            <p className = 'grey header-title-style'>@LambdaSchool</p>
            <p className = 'grey header-title-style'>{date()}</p>
        </div>
    )
};

export default HeaderTitle;
