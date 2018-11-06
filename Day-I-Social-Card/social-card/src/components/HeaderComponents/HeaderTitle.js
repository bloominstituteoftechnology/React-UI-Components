import React from 'react';
import './Header.css';

function HeaderTitle(props) {
    let date = new Date();
    let month = [];
    month[0] = "jan";
    month[1] = "feb";
    month[2] = "mar";
    month[3] = "apr";
    month[4] = "may";
    month[5] = "jun";
    month[6] = "jul";
    month[7] = "aug";
    month[8] = "sep";
    month[9] = "oct";
    month[10] = "nov";
    month[11] = "dec";

    return (
        <div className="header-title">
            <h1>{props.title}</h1>
            <p>{props.handle} · {date.getDate()} {month[date.getMonth()]}</p>
        </div>
    );
}

export default HeaderTitle;