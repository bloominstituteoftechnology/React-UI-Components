import React from 'react';
import './Header.css';

function HeaderTitle(props) {
    let date = new Date();
    let month = [];
    month[0] = "Jan";
    month[1] = "Feb";
    month[2] = "Mar";
    month[3] = "Apr";
    month[4] = "May";
    month[5] = "Jun";
    month[6] = "Jul";
    month[7] = "Aug";
    month[8] = "Sep";
    month[9] = "Oct";
    month[10] = "Nov";
    month[11] = "Dec";

    return (
        <div className="header-title">
            <h1>{props.title}</h1>
            <p>{props.handle} - {date.getDate()} {month[date.getMonth()]}</p>
        </div>
    );
}

export default HeaderTitle;