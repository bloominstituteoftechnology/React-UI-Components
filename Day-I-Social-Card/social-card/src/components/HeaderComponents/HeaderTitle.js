import React from 'react';
import './Header.css';

const HeaderTitle = () => {
    let today = new Date().toISOString().slice(0, 10);
    return (
        <div className="HeaderTitle">
            <p>Lambda School @LambdaSchool, {today}</p>
        </div>
    )
}

export default HeaderTitle;