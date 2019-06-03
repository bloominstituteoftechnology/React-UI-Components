import React from 'react';
import './Header.css';

const HeaderTitle = () => {
    // let date = moment().format("MMM Do");

    return (
        <div className = 'title'>
        <h1 className = 'h1'>Lambda School</h1>
        <h2 className = 'h2'>@LambdaSchool &middot;</h2>
        </div>
    )
}

export default HeaderTitle;