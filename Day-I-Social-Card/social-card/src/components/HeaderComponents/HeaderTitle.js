import React from 'react';
import './Header.css';

let d = new Date();
let date = `${d.getDate()} ${d.toLocaleString('en-US', {month: "short"})}`;

let HeaderTitle = () => {
    return (
        <h2>Lambda School <span>{`@LambdaSchool · ${date}`}</span></h2>
    )
}

export default HeaderTitle;