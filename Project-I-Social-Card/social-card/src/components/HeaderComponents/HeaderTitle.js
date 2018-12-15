import React from 'react';
import './Header.css';




const monthDay = function () {
    let today = new Date();

    let month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    return (`${today.getDate()} ${month[today.getMonth()]}`)
};

const HeaderTitle = () => {
    return (
        <div className="header-title">
            <h1 className="title">Lambda School <span className="title-info">@LambdaSchool {monthDay()}</span>
            </h1>
        </div>
    )
};

export default HeaderTitle;