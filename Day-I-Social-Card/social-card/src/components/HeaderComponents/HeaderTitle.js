import React from 'react';
import './Header.css';

const HeaderTitle = () => {
let name = "Lambda School";
let handle = "LambdaSchool";
let date = "· 26 jan";

return (
    <div className="header-title">
        <h1 className="user-name">{name}</h1>
        <p className="user-handle"><span>@</span>{handle}</p>
        <p className="date-posted">{date}</p>
    </div>
);
}

export default HeaderTitle;